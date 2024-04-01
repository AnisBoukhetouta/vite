import React from "react";
import AppConstants from "../../AppConstants";
import GameCard from "../../components/gameCard/card";
import classes from "./gameLobby.module.css";

export default function GameLobby() {
  return (
    <div className={classes.gameLobbyContainer}>
      <GameCard cardData={AppConstants.cardData} />
    </div>
  );
}
