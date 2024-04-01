import React from "react";
import AppConstants from "../../AppConstants";
import GameCards from "../../components/gameCards/gameCards";
import classes from "./gameLobby.module.css";
import LobbyHeader from "../../components/lobbyHeader/lobbyHeader";

export default function GameLobby() {
  return (
    <div className={classes.gameLobbyContainer}>
      <LobbyHeader />
      <GameCards cardData={AppConstants.cardData} />
    </div>
  );
}
