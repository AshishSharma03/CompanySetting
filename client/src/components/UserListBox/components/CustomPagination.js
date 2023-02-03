import { Box, Button ,Grid,Pagination,Typography,Stack } from '@mui/material'

import React ,{useState}from 'react'

export const CustomButton =({icon,name,color,iconRight,onClick,isDisable})=> 
        <Button disabled={isDisable} onClick={onClick} color='secondary' variant='contained' sx={{padding:"8px 20px",borderRadius:"9px",border:(color)?"1px solid #DADADA": "",background:(color)?color:"",color:(color)?"#000000":"",boxShadow:"none",'&:hover':{
            boxShadow:"none",
            backgroundColor:(!color)?"":"#EEEEEE",
        }}}>
            <Stack direction={"row"} justifyContent="center" alignItems="center" gap={1.5}>
              {(!iconRight)?
              <React.Fragment>
                {icon}
                <Typography sx={{textTransform:"none",fontWeight:"bold"}}>{name}</Typography>
              </React.Fragment>
              :
              <React.Fragment>
              <Typography sx={{textTransform:"none",fontWeight:"bold"}}>{name}</Typography>
              {icon}
            </React.Fragment>
              }
                </Stack>
         </Button>;

function CustomPagination({DesktopPagination, MobilePagination,  PrivousButton,nextButton}){
  return (
    <Box padding={"10px 10px"} display="flex"  justifyContent="center"  >
      <Grid container justifyContent={"center"} alignItems="center" sx={{display:{lg:"flex",md:"flex",sm:"none",xs:"none"}}}>
        <Grid item xs={4} >{PrivousButton}</Grid>
        <Grid item xs={4} display="flex" justifyContent={"center"} > {DesktopPagination}</Grid>
        <Grid item xs={4}  display="flex" justifyContent={"right"}>{nextButton}</Grid>   
      </Grid>
      {MobilePagination}
    </Box>
  )
}

export default CustomPagination