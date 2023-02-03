import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function LoadingScreen() {
  return (
    <Box minHeight={"100vh"} display="flex" justifyContent={"center"} alignItems="center">
        <CircularProgress size={"20px"} />
    </Box>
  )
}

export default LoadingScreen