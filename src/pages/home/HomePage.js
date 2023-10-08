import React from "react";
import "./HomePage.css";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Carousel from "react-material-ui-carousel";

function HomePage() {
  const images = [
    'https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg',
    'https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg',
    'https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg',
  ];

  return (
    <Grid container spacing={2} style={{ height: "90vh" }}>
      <Grid
        container
        item
        md={6}
        xs={12}
        lg={6}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
      >
        <Grid item md={12} pt={10} pl={5}>
          <Typography variant="h3" style={{ color: "#212121" }}>
            Premium video meetings.
            <br />
            Now free for everyone.
          </Typography>
        </Grid>

        <Grid item md={12} pl={5} mb={10}  >
          <Typography
            variant="subtitle1"
            style={{
              color: "#63676C",
              fontFamily: "poppins",
              fontWeight: "500",
              height:"50px"
            }}
          >
            We re-engineered the service we built for secure business <br />
            meetings,Google Meet, to make it free and available for all.
          </Typography>
        </Grid>

        <Grid container spacing={2} mb={20}  >
          <Grid pl={7} >
            <Button
              item
              variant="contained"
              startIcon={<VideoCallOutlinedIcon />}
            >
              New meeting
            </Button>
          </Grid>

          <Grid pl={5} >
            <TextField
              item
              id="outlined-basic"
              label="Enter code"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid pl={2}>
            <Button
              item
              variant="outlined"
              
            >
              Join
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        md={6}
        xs={12}
        lg={6} 
        pr={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
      <Grid item md={12} lg={12}>
        <Carousel sx={{
          width:"100%",
          height:"80vh",
          
        }}>
        
         {
          images.map((image,index)=>{
            return <Paper key={index}>
            <img src={image} alt="" style={
              {
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }
            }
             />
            </Paper>

          })
         }
        
        </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
