import React from "react";
import classes from "./lobbyHeader.module.css";
import { Button } from "@mui/material";

export default function LobbyHeader() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className={classes.container}>
      <div className={classes.lobbyHearder}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "200px",
            height: "70px",
            borderRadius: "10px",
            fontSize: "20px",
            color: "rgb(206, 205, 202)",
            background: "rgb(84, 78, 62)",
          }}
          onClick={handleClick}
        >
          <b> PLAY NOW</b>
        </Button>
      </div>
      <img
        className={classes.image}
        src="images/home/10308.jpg"
        alt="lexschool"
      />
    </div>
  );
}
