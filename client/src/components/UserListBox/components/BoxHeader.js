    import React from 'react'
    import { Box, Button,  Chip, Stack, Typography } from "@mui/material";
    import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
    import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
    import { CSVLink, CSVDownload } from "react-csv";
import AddUser from '../../AddUser';

    const CustomButton =({icon,name,color})=> 
        <Button   color='secondary' variant='contained' sx={{padding:{lg:"8px 18px"},borderRadius:"9px",border:(color)?"1px solid #DADADA": "",background:(color)?color:"",color:(color)?"#000000":"",boxShadow:"none",'&:hover':{
            boxShadow:"none",
            backgroundColor:(!color)?"":"#EEEEEE",
            
        }}}>
            <Stack direction={"row"} justifyContent="center" alignItems="center" gap={1.5}>
                {icon}
                <Typography sx={{textTransform:"none",fontWeight:"bold",fontSize:{xs:"10px",sm:"10px",md:"10px",lg:"15px"}}}>{name}</Typography>
            </Stack>
         </Button>;

    function BoxHeader({users,data}) {
      return (
        <Box p={2}>
        <Box display={"flex"}  gap={1}>
           <Stack direction={"row"} alignItems="center" gap={0.9}>
               <Typography sx={{fontWeight:550,fontSize:{lg:"20px",xs:"15px"}}}>Users</Typography>
               <Chip label={users + " Users"}  sx={{height:"fit-content",padding:"5px 2px",fontWeight:600,backgroundColor:"#effcf4",color:"#75A88A",fontSize:{lg:"none",xs:"10px"}}}/>
           </Stack>  
         <Box  component={'span'} flexGrow={1}/>
         <Stack direction={"row"} display={{lg:"flex",md:"flex",sm:"flex",xs:"none"}} gap={1.5}>
        <CSVLink data={data} style={{textDecoration:"none"}} filename="UserReport">
        <CustomButton name={"Download CSV"}  icon={<CloudDownloadOutlinedIcon/>} color="#ffffff" />
        </CSVLink>
        <CustomButton name={"Add user"} icon={  <AddOutlinedIcon/>} />
         </Stack>
        </Box>
        <Typography sx={{color:"gray",fontSize:{lg:"15px",md:"15px",xs:"10px"}}}>Manage your team and their account permission here</Typography>
        <Stack gap={1} marginTop={1} direction="row" sx={{display:{lg:"none",md:"none",sm:"none",xs:"flex"}}} justifyContent="left">
        <CSVLink data={data} style={{textDecoration:"none"}} filename="UserReport">
        <CustomButton name={"Download CSV"} icon={<CloudDownloadOutlinedIcon/>} color="#ffffff" />
        </CSVLink>
        <CustomButton name={"Add user"}  icon={  <AddOutlinedIcon/>} />
        
        </Stack>
        {/* <AddUser/> */}
     </Box>

      )
    }
    
    export default BoxHeader