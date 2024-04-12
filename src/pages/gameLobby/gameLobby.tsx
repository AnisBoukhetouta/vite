import React from "react";
import classes from "./gameLobby.module.css";
import LobbyHeader from "../../components/lobbyHeader/lobbyHeader";
import LobbyHeaderGame from "../../components/lobbyHeaderGame/lobbyHeaderGame";

export default function GameLobby() {
  return (
    <div className={classes.gameLobbyContainer}>
      <LobbyHeader />
      <LobbyHeaderGame />
    </div>
  );
}
