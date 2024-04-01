import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";

export default function ModelBox() {
  return (
    <>
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        shadows
      >
        <Model />
      </Canvas>
    </>
  );
}
