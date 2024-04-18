import * as React from "react";
import classes from "./gameNavlinks.module.css";
import GameNavlink from "../navlink/gameNavlink";

const gameNavlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <GameNavlink link="/play">PLAY</GameNavlink>
        <GameNavlink link="/inventory">LOCKER</GameNavlink>
        <GameNavlink disable={true} link="#">ITEM SHOP</GameNavlink>
        <GameNavlink disable={true} link="#">BATTLE PASS</GameNavlink>
        <GameNavlink disable={true} link="#">QUESTS</GameNavlink>
        <GameNavlink disable={true} link="#">COMPLETE</GameNavlink>
        <GameNavlink disable={true} link="#">CAREER</GameNavlink>
      </ul>
    </div>
  );
};

export default gameNavlinks;
