import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import styles from '../components/login.module.css'
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'
import { red } from '@mui/material/colors';

const listIcon = './assets/images/icon-list.svg'

const desktopImg = './assets/images/illustration-sign-up-desktop.svg';


export default function Login() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e) {
    e.preventDefault();
    let feild = document.getElementById("emailText");
    console.log(feild.value);
    if (_.isEmpty(feild.value)) {
      setError(prev => true);
    }
    else {
      if (emailRegex.test(feild.value)) {
        setError(prev => false);
        navigate('/success');
      }
      else {
        setError(prev => true)
      }
    }
  }
  let listStyle = {
    display: "flex", justifyContent: "start", alignItems: "center"
  }

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

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "hsl(234, 29%, 20%)", width: "100vw", height: "100vh" }}>
      <Grid container spacing={{ xs: 0, md: 2 }} sx={{ maxWidth: "60%", height: "80%", borderRadius: "8px", padding: "5px 10px", background: "white", overflowY: "scroll", ...scrollbar, }} direction={{ xs: "row-reverse", md: "row-reverse" }} >
        <Grid item md={6} sx={{
          height: "100%", width: "100%", '&.MuiGrid-item-xs': {
            borderRadius: "0px 0px 4px 4px",
            height: "100%",
            marginBottom: "5px"
          },
          '&.MuiGrid-item-md': {
            borderRadius: "4px",
            minHeight: "100%"
          }
        }} >
          <div className={`${isMd ? styles.imgMd : styles.imgXs}`} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${desktopImg})`, height: "100%", width: "100%" }}></div>
        </Grid>
        <Grid item md={6}>
          <div style={{ height: "80%", margin: "auto ,0" }}>
            <Typography variant='h2' gutterBottom>
              Stay Updated!
            </Typography>
            <Typography variant='body1' gutterBottom>
              Join 60,000+ products managers receiving monthly updates on:
            </Typography>

            <Typography variant='body2' sx={{ ...listStyle }} gutterBottom>
              <img src={listIcon} alt='listIcon' style={{ paddingRight: "10px" }} />
              <p>Product discovery and building what matters</p>
            </Typography>
            <Typography variant='body2' sx={{ ...listStyle }} gutterBottom>
              <img src={listIcon} alt='listIcon' style={{ paddingRight: "10px" }} />
              <p>Measuring to ensure updates are a success</p>
            </Typography>
            <Typography variant='body2' sx={{ ...listStyle }} gutterBottom>
              <img src={listIcon} alt='listIcon' style={{ paddingRight: "10px" }} />
              <p>And much more!</p>
            </Typography>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignContent: "space-between", marginBottom: "10px", position: "relative" }}>
              <label htmlFor='emailText' style={{ marginBottom: "2px" }}>Email address:</label>
              {error && <span style={{ position: "absolute", top: 0, right: 0, color: "red" }}>Valid email required</span>}
              <TextField error={error} id="emailText" variant="outlined" type='text' sx={{
                background: (error ? "pink" : "white"), borderColor: "gray",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black'
                  }
                }
              }} />
            </form>
            <Button variant='contained' onClick={handleSubmit} sx={{
              bgcolor: "#1C1C1C", '&:hover': {
                bgcolor: "hsl(4, 100%, 67%)"
              }
            }}>Subscribe to monthly updates</Button>
          </div>
        </Grid>

      </Grid>
    </Box>
  )
}
