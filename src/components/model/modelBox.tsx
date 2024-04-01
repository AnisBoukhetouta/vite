import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames from "../topGames/topGames";

export default function ModelBox() {
  return (
    <>
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          background: `url("/images/home/10302.jpg") no-repeat fixed center`,
        }}
        shadows
      >
        <Model />
      </Canvas>
      <TopGames />
    </>
  );
}
