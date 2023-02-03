import React, { useState } from 'react'
import { Box, Button,  Stack  } from "@mui/material";

const button_ = [
  {
    key:1,
    title : 'General',
  },
  {
    key:2,
    title : 'Users',
  },
  {
    key:3,
    title : 'Plan',
  },
  {
    key:4,
    title : 'Billing',
  },
  {
    key:5,
    title : 'Integrations',
  }
]

function CustomButtonGroups() {
  const [active] = useState(button_[1].title);
    

  return (
    <Box >
    <Stack direction={"row"}  sx={{width:"fit-content",borderRadius:"6px",border:"none"}}>
      <Button  sx={{backgroundColor:(active === button_[0].title)?"#EEEEEE":"",fontSize:{lg:"12px",md:"12px",sm:"12px",xs:"10px"},textTransform:"capitalize",fontWeight:600,color:"#484848",border:"1px solid #DADADA",borderRadius:"6px 0px 0px 6px"}}>{button_[0].title}</Button>
      {button_.map((a,_i)=> 
      (_i>0 && _i <button_.length -1)?
      
      <Button key={a.key}   sx={{backgroundColor:(active === a.title)?"#EEEEEE":"",fontSize:{lg:"12px",md:"12px",sm:"12px",xs:"10px"},textTransform:"capitalize",fontWeight:600,color:"#484848",borderRadius:"0px",borderRight:( _i === button_.length - 2 )?"none":"1px solid #DADADA",borderTop:"1px solid #DADADA",borderBottom:"1px solid #DADADA",borderLeft:(_i === 0)? "1px solid #e7e7e7":"none"}}>{a.title}</Button>
      :""
      )}
      <Button  sx={{backgroundColor:(active === button_[button_.length - 1].title)?"#EEEEEE":"",fontSize:{lg:"12px",md:"12px",sm:"12px",xs:"10px"},textTransform:"capitalize",fontWeight:600,color:"#484848",border:"1px solid #DADADA",borderRadius:"0px 6px 6px 0px"}}>{button_[button_.length - 1].title}</Button>
   
      </Stack>  
    </Box>
  )
}

export default CustomButtonGroups