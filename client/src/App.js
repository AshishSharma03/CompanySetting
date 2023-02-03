import { Alert, Box, Container, Snackbar, Stack  } from "@mui/material";
import AppHeader from "./components/AppHeader";
import CustomButtonGroups from "./components/CustomButtonGroups";
import UserListBox from "./components/UserListBox";
import { useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {  FetchUser } from "./Reducer/UserReducer";
import LoadingScreen from "./components/LoadingScreen";


function App() {
  // const [Data ,setData] = useState()
  // const [Name, setName] = useState();

  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [online, isOnline] = useState(false);
  const [load, setLoad] = useState(true);


  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);

  
  useEffect(() => {
    setTimeout(() => {
      isOnline(navigator.onLine);
      setLoad(false);
    }, 500);
  }, []);

  useEffect(() => {
    const handleisOnline = () => {
      isOnline(navigator.onLine);
    };

    window.addEventListener("offline", handleisOnline);
    window.addEventListener("online", handleisOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", handleisOnline);
      window.removeEventListener("online", handleisOnline);
    };
  }, [online]);
// console.log(users)
  // const updateName_ = () => {
  //   dispatch(updateName(Name));
  // };

  
  if(load){
    return <LoadingScreen/>
  }


  return <Box > 
           <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!online}
      >
        <Alert severity="error">Check your connection!</Alert>
      </Snackbar>
          <Container maxWidth={"lg"}>
              <AppHeader/>
            <Stack direction={"column"} gap={{lg:2,md:2,sm:2,xs:2}}>
              <CustomButtonGroups/>
              <UserListBox users={users}/>
            </Stack>
        </Container>
  </Box>;
}

export default App;
