

import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const TableHeads = ({name,padding,Removeicon,display}) =>
<Stack direction={"row"} gap={0.5} padding={padding} display={display} alignItems="center">
<Typography sx={{color:"gray",fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"10px"}}}>{name}</Typography>
{(!Removeicon)?
<ArrowDownwardRoundedIcon sx={{color:"gray"}} fontSize="20px"/>
:""}
</Stack>;




function UserListHeader() {
  return (
    <Box display={"flex"}p={"10px 20px"}>
      <Grid container>

        <Grid item lg={6.5} md={6} sm={6} xs={5}>
        <Stack direction={"row"}alignItems="center" gap={2}>
        <input type="checkbox" />
        <TableHeads name={"Name"}/>
        </Stack>
        </Grid>
        <Grid item lg={1.5} md={1.5} sm={2} xs={2} display="flex" justifyContent={{md:"left",sm:"left",xs:"right"}} >
        <TableHeads name={"Status"} />
        </Grid>
        <Grid item lg={1.5} md={1.5} sm={2} xs={2} display="flex" justifyContent={{md:"left",sm:"left",xs:"right"}}>
        <TableHeads name={"Role"} />
        </Grid>
        <Grid item lg={1} md={2} sm={2} xs={3} display="flex" justifyContent={{md:"center",xs:"right"}} >
        <TableHeads name={"Last Login"} />
        </Grid>
        
      </Grid>
       
        
    </Box>
  )
}

export default UserListHeader