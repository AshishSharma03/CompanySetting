import { Box, Button, Dialog, Grid, IconButton, Input, Stack, Typography } from '@mui/material'
import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


function AddUser() {
  
  return (
    <Dialog  open={true} >
        <Box sx={{padding:"10px"}}>
          <Box textAlign={"center"} p={"20px"}>
            <Typography sx={{fontSize:"15px",fontWeight:600}}> Add New User</Typography>
          </Box>
          <Box component={'div'} src="" width={"200px"} height={"200px"} sx={{border:"1px solid #EEEEEE"}}>
            
            <VisibilityOffOutlinedIcon/>
          </Box>
          <Stack direction={'column'} gap={1}>
            <input placeholder='User Name'   style={{padding:"10px" ,fontSize:"15px",width:"300px"}}  />
            <input placeholder='Email'   style={{padding:"10px" ,fontSize:"15px",width:"300px"}}  />
            <Stack direction={"row"} gap={1}>
            <input placeholder='Password'   style={{padding:"10px" ,fontSize:"15px",width:"250px"}}  />
            <IconButton>
                <VisibilityOffOutlinedIcon/>
            </IconButton>
            </Stack>
            <Stack direction={"row"} gap={1}>
            <input placeholder='Confirm Password'   style={{padding:"10px" ,fontSize:"15px",width:"250px"}}  />
            <IconButton>
                <VisibilityOffOutlinedIcon/>
            </IconButton>
            </Stack>

            <select style={{padding:"10px"}}>
              <option style={{fontSize:"15px",padding:"10px"}}>Admin</option>
              <option style={{fontSize:"15px",padding:"10px"}}>Admin</option>
            </select>
          <Button variant="contained">Add User</Button>
          </Stack>
        </Box>
        
    </Dialog>
  )
}

export default AddUser