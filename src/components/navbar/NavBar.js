import React from "react";
import "./NavBar.css";
import { green } from "@mui/material/colors";
import { Avatar, Typography } from "@mui/material";

function NavBar() {
  return (
    <div className="container">
      <div className="logo">
        <img
          src="/logo.png"
          alt="google meet"
        />
        <Typography variant="h5">Meet</Typography>
      </div>
      <div className="ta-container">
      <div className="time">
        <Typography variant="subtitle3">4:09PM  Sat,Oct 7</Typography>
      </div>
      <div className="avatar-container">
      <Avatar sx={{ bgcolor: green[700] , width: 35, height: 35}}>A</Avatar>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
