import React, { useState } from "react";
import classes from "./charactory.module.css";

interface Props {
  characterOptions: boolean;
  menu: any[];
  title: number;
  setCharacterOptions: (value: boolean) => void;
}

export default function InventoryBody({
  characterOptions,
  menu,
  title,
  setCharacterOptions,
}: Props) {
  const [characterName, setCharacterName] = useState(0);
  return (
    <>
      {" "}
      <div className={characterOptions ? classes.hide : classes.character}>
        <div className={classes.characterBody}>
          <div className={classes.characterBodyTitle}>{menu[title].title}</div>
          <div className={classes.characterBodysmallTitle}>
            {charactor[characterName].title}
          </div>
          <div className={classes.characterBodyCards}>
            {charactor.map((item, key) => (
              <div
                className={`${classes.card} ${classes.cardWidth}`}
                key={item.id}
                onClick={() => setCharacterName(key)}
              >
                <img
                  src={item.image}
                  alt="character"
                  className={classes.cardImg}
                />
                <div className={classes.colorFlow} />
              </div>
            ))}
          </div>

          <button className={`${classes.buttons} ${classes.saveButton}`}>
            SAVE CHARACTOR
          </button>
          <button
            className={`${classes.buttons} ${classes.optionButton}`}
            onClick={() => setCharacterOptions(true)}
          >
            OPTIONS
          </button>
        </div>
        <div className={classes.characterDispaly}></div>
      </div>
      {/* charactor save */}
      <div
        className={
          characterOptions
            ? `${classes.character} ${classes.hoverbar}`
            : `${classes["bar--secondary"]} ${classes.bar} ${classes.opacities}`
        }
      >
        <div className={classes.character}>
          <div className={classes.characterBody}>
            <div className={classes.characterBodyTitle}> SAVED CHARACTOR </div>
            <div className={classes.characterCards}>
              <div className={classes.cardBody}>
                {charactorSave.map((item, index) => (
                  <div className={`${classes.card} ${classes.characterCard} `}>
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
          <div className={classes.characterDispaly}></div>
          <div className={classes.characterElement}>
            {charactor.map((item, index) => (
              <div
                className={`${classes.card} ${classes.characterElementWidth} `}
              >
                <img
                  src={item.image}
                  alt="character"
                  className={classes.cardImg}
                />
                <div className={classes.colorFlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const charactor = [
  { id: 0, title: "OUTFIT", image: "./images/inventory/glider.png" },
  { id: 1, title: "BACKBLING", image: "./images/inventory/contrail.png" },
  { id: 2, title: "PICKAXE", image: "./images/inventory/back.png" },
  { id: 3, title: "GLIDER", image: "./images/inventory/plan.png" },
  { id: 4, title: "CONTRAIL", image: "./images/inventory/charactor.png" },
  { id: 5, title: "AURA", image: "./images/inventory/empty.png" },
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
