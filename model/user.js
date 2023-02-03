const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{type : String ,required : true},
    password:{type : String ,required : true},
    userName:{type : String ,required : true},
    role:{type : String ,required : true},
    lastLoginDate:{type : String ,required : true},
    lastLoginTime:{type : String ,required : true},
})



module.exports = mongoose.model('TechWondoeUsers',userSchema)