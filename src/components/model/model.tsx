import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Character } from "../Character";

export default function Model() {
  return (
    <>
      <OrbitControls
        minAzimuthAngle={0.2}
        maxAzimuthAngle={0.2}
        minPolarAngle={1.34}
        maxPolarAngle={1.34}
        minDistance={4.35}
        maxDistance={7}
      />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[1, -0.5, 3.5]}>
        <Character />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
}
