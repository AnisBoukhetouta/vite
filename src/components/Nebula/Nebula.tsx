import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BlueFlame from "./BlueFlame";

export default function Nebula() {
  return (
    <Canvas style={{ backgroundColor: "#101014" }}>
      <OrbitControls target={[0, 25, 0]} />
      <PerspectiveCamera makeDefault fov={105} position={[0, 5, -30]} />
      <BlueFlame />
    </Canvas>
  );
}
