import React from "react";
import "./Meeting.css";
import { Grid, IconButton } from "@mui/material";
import { CallEnd, MicOffRounded, VideocamOff } from "@mui/icons-material";

function Meeting() {
  return (
    <div>
      <Grid container md={12} className="meet-container">
        <Grid container md={12} className="main-grid">
          <Grid item md={6} className="my-video">
            <video src=""></video>
          </Grid>
          <Grid container md={6} p={2} spacing={1} className="video-container">
            <Grid item md={3} style={{ height: "150px" }}>
              <video src=""></video>
            </Grid>
            <Grid item md={3} style={{ height: "150px" }}>
              <video src=""></video>
            </Grid>
            <Grid item md={3} style={{ height: "150px" }}>
              <video src=""></video>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} md={12} className="controllers">
          <Grid item md={4} className="grid-item">
            <IconButton
              style={{ color: "black", backgroundColor: "white" }}
              className="mic-off-btn"
              aria-label="mic-off"
            >
              <MicOffRounded />
            </IconButton>
          </Grid>
          <Grid item md={4} className="grid-item">
            <IconButton
              style={{ color: "red", backgroundColor: "white" }}
              className="mic-off-btn"
              aria-label="mic-off"
            >
              <CallEnd />
            </IconButton>
          </Grid>
          <Grid item md={4} className="grid-item">
            <IconButton
              style={{ color: "black", backgroundColor: "white" }}
              className="mic-off-btn"
              aria-label="mic-off"
            >
              <VideocamOff />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Meeting;
