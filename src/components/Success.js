import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const listIcon = './assets/images/icon-list.svg'

let scrollbar = {
  "&::-webkit-scrollbar": {
    width: "5px",
    height: "5px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundClip: "content-box",
    border: "2px solid transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "0px 8px 8px 0px",
    backgroundColor: "#DCDCDC"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#C4C4C4"
  }
}



export default function Success() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "hsl(234, 29%, 20%)", width: "100vw", height: "100vh" }}>
      <Grid container sx={{ maxWidth: "40%", height: "60%", borderRadius: "8px", padding: "15px 35px", background: "white", overflowY: "scroll", ...scrollbar, alignItems: "start" }} >
        <img src={listIcon} alt='' style={{ height: "50px", width: "50px" }} />
        <Typography variant='h2' gutterBottom>Thanks for subscribing!</Typography>
        <Typography variant='body1' gutterBottom>
          A confirmation email has been sent to . Please open it and click the button inside to confirm  your subscription.
        </Typography>
        <Button variant='contained' onClick={handleClick} sx={{
          marginTop: "15px",
          bgcolor: "#1C1C1C", '&:hover': {
            bgcolor: "hsl(4, 100%, 67%)"
          }
        }}>Dismiss message</Button>
      </Grid>
    </Box>
  )
}
