import React from "react";
import classes from "./lobbyHeader.module.css";

export default function LobbyHeader() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>LexSchool</header>
      {/* <img
        className={classes.image}
        src="/images/home/10306.jpg"
        alt="lexschool"
      /> */}
    </div>
  );
}
