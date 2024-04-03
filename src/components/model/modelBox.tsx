import React, { useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";

export default function ModelBox() {
  const [background, setBackground] = React.useState<any>(
    "/images/home/10302.jpg"
  );
  const [item, setItem] = React.useState<any>();
  const ModelView = useCallback(() => <Model />,[]);
  return (
    <>
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          backgroundImage: `url(${
            item !== undefined ? item.imageOver : "/images/home/10302.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        shadows
      >
        <ModelView/>
      </Canvas>
      
        <div style={{ position: "absolute", top: 300, left: 100 }}>
          <GameCard item={item !== undefined ? item : AppConstants.cardData[0]} />
        </div>
      
      <TopGames setItem={setItem} />
    </>
  );
}
