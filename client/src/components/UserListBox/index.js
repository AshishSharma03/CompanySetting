import React, { useState,useEffect } from 'react'
import { Box, Divider, Pagination, Paper, Typography } from "@mui/material";
import BoxHeader from './components/BoxHeader';
import UserListHeader from './components/UserListHeader';
import UserList from './components/UserList';
import CustomPagination, { CustomButton } from './components/CustomPagination';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';



function UserListBox({users}) {
        const [MaxPage, setMaxPage] = useState(1);
        const [Page,setPage] = useState(1);
        

        useEffect(() => {
            
            if(users.User){
                let k = 0, n = users.User.length ;
                while(n > 0){
                    n = n - 6;
                    k++;
                }
                console.log(k)
                setMaxPage(k)
            }

        }, [users.User]);

    return (
        <Box   maxHeight="100vh">
            <Paper sx={{minWidth:"100%",minHeight:{lg:"592px",md:"592px",sm:"572px"},boxShadow:"none",border:"1px solid #DADADA",borderRadius:"8px" ,display:"flex",flexDirection:"column"}}>
                <BoxHeader users={users.User.length } data={users.User} />
                 <Divider/>
                <UserListHeader/>
                {(users.User.length === 0)?<Box minHeight={"350px"} minWidth="100%" display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Typography sx={{fontWeight:800,fontSize:"20px",color:"#DEDEDE"} }>No User Exists !</Typography>
                </Box>:""}
                 {users.User?.slice(  (Page * 6) - 6   , Page * 6 ).map((a,_i)=>
                <UserList even={((_i+ 1)%2 === 0 )?true : false } key={_i}  UserName={a.userName} Email={a.email} Role={a.role} DateOfLastLogin={a.lastLoginDate} TimeofLastLogin={a.lastLoginTime} />)} 
                <Box flexGrow={1} />
                <Divider/>

               <CustomPagination
               DesktopPagination={<Pagination count={MaxPage}  page={Page} onChange={(e,v)=>{setPage(v)}}  shape="rounded"    hideNextButton  hidePrevButton/>}
               MobilePagination={<Pagination count={MaxPage} page={Page} onChange={(e,v)=>{setPage(v)}} shape="rounded"   sx={{display:{xs:"block",sm:"block",md:"none",lg:"none"}}} />}
               PrivousButton={(Page > 1)? <CustomButton name={"Privious"}  
               onClick={()=>{setPage(Page - 1)
                }} color="#ffffff" icon={<ArrowBackRoundedIcon/>}/>:
                <CustomButton name={"Privious"} isDisable color="#ffffff" icon={<ArrowBackRoundedIcon/>}/>
                }
               nextButton={(Page < MaxPage)?<CustomButton name={"Next"} onClick={()=>{
                if(Page < MaxPage){
                setPage(Page + 1)
               }
            }} color="#ffffff" iconRight icon={<ArrowForwardRoundedIcon/>}/>
            :
            <CustomButton name={"Next"} isDisable color="#ffffff" iconRight icon={<ArrowForwardRoundedIcon/>}/>} 
               />
            </Paper>
        </Box>
    )
}

export default UserListBox