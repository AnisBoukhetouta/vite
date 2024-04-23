import React from "react";
import classes from "./savedCharacterView.module.css";

export default function SavedCharacterView() {
  return (
    <div className={classes.character}>
      <div>
        <div className={classes.characterBodyTitle}> SAVED CHARACTOR </div>
        <div className={classes.characterCards}>
          <div className={classes.cardBody}>
            {charactorSave.map((item, index) => (
              <div
                key={index}
                className={`${classes.card} ${classes.characterCard} `}
              >
                <img
                  src={item.image}
                  alt="character"
                  className={classes.cardImg}
                />
                <div
                  className={`${classes.buttonTitle} ${classes.characterText}`}
                >
                  Title
                </div>
                <div className={classes.colorFlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.characterElement}>
        {charactor.map((item, index) => (
          <div
            key={index}
            className={`${classes.card} ${classes.characterElementWidth} `}
          >
            <img src={item.image} alt="character" className={classes.cardImg} />
            <div className={classes.colorFlow} />
          </div>
        ))}
      </div>
    </div>
  );
}
const charactor = [
  { id: 0, title: "Outfit", image: "./images/inventory/glider.png" },
  { id: 1, title: "Backbling", image: "./images/inventory/contrail.png" },
  { id: 2, title: "Pickaxe", image: "./images/inventory/back.png" },
  { id: 3, title: "Glider", image: "./images/inventory/plan.png" },
  { id: 4, title: "Contrail", image: "./images/inventory/charactor.png" },
  { id: 5, title: "Aura", image: "./images/inventory/empty.png" },
];

const charactorSave = [
  { id: 0, image: "./images/inventory/charactor.png" },
  { id: 1, image: "./images/inventory/charactor.png" },
  { id: 2, image: "./images/inventory/charactor.png" },
  { id: 3, image: "./images/inventory/charactor.png" },
  { id: 4, image: "./images/inventory/charactor.png" },
  { id: 5, image: "./images/inventory/charactor.png" },
  { id: 6, image: "./images/inventory/charactor.png" },
  { id: 7, image: "./images/inventory/charactor.png" },
  { id: 8, image: "./images/inventory/charactor.png" },
  { id: 9, image: "./images/inventory/charactor.png" },
  { id: 10, image: "./images/inventory/charactor.png" },
  { id: 11, image: "./images/inventory/charactor.png" },
];
