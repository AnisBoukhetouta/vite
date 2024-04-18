import React from "react";
import classes from "./lobbyHeaderGame.module.css";
import NextButton from "../button/nextButton";
import PrevButton from "../button/prevButton";

export default function Carouselbutton() {
  return (
    <div className={classes.carouselButton}>
      <div className={classes.prevButton}>
        <div className={classes.buttonIconPrev}>
          <div className={classes.buttonLine}>
            <PrevButton />
          </div>
        </div>
      </div>
      <div className={classes.nextButton}>
        <div className={classes.buttonLine}>
          <div className={classes.buttonIcon}>
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}
