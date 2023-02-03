const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const JWT = require("jsonwebtoken");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const {JWT_SECRET,MONGOURI} = require('./config/keys')
const cors = require('cors')
mongoose.connect(
  MONGOURI,
  {
    useNewUrlParser: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo!");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000"
}))


app.post("/AddUser", async (req, res) => {
  const { email, password, userName, role, lastLoginDate, lastLoginTime } =
    req.body;

  try {
    if (!email || !password) {
      return res.status(422).json({ error: "please add all the field" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(422)
        .json({ error: "use already exists with that email" });
    }
    const hashpass = await bcrypt.hash(password, 12);
    await new User({
      email,
      password: hashpass,
      userName,
      role,
      lastLoginDate,
      lastLoginTime,
    }).save();
    res.status(200).json({ message: "user added success!" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/logIn", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({ error: "please add all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "user dosen't exist with that email" });
    }
    const doMatch = await bcrypt.compare(password, user.password);
    if (doMatch) {
      const token = JWT.sign(
        {
          userId: user._id,
        },
        JWT_SECRET
      );
      res.status(200).json({ token });
    } else {
      return res.status(401).json({ error: "email or password is invalid" });
    }
  } catch (err) {
    console.log(err);
  }
});

const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "You must be logged in" });
  }
  try {
    const { userId } = JWT.verify(authorization, JWT_SECRET);
    req.user = userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "you must be logged in" });
  }
};

app.get("/getUsers", async (req, res) => {
  const users = await User.find();

  res.status(201).json({ User: users });
});

app.get("/test", requireLogin, (req, res) => {
  res.json({ message: req.user });
});


app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.delete("/remove/:id", requireLogin, async (req, res) => {
  const removeUser = await User.findOneAndDelete({ _id: req.params.id });
  res.status(200).json( { message: removeUser });
});

if(process.env.Node_ENV == 'production'){

    app.get('/',(req,res)=>{
      app.use(express.static(path.resolve(__dirname,'client','build')))
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}

app.listen(PORT, () => {
  console.log("Server is runing on " + PORT);
});
