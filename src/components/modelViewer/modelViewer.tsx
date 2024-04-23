import React from "react";
import * as THREE from "three";
import classes from "./modelViewer.module.css";
import { Canvas, dispose, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Props {
  src: string;
}

function ModelViewer({ src }: Props) {
  console.log("~~~~~~~~~~", src);
  useLoader.clear(GLTFLoader, src ?? "./models/character0.glb")
  
  function Model() {
    const gltf = useLoader(GLTFLoader, src ?? "./models/character0.glb");
    const { camera } = useThree();
    const { animations, scene } = gltf;
    const mixer = new THREE.AnimationMixer(scene);

    const clip = animations[0];
    const action = mixer.clipAction(clip);
    useFrame((state, delta) => {
      mixer.update(delta);
    });
    action.play();
    action.loop = THREE.LoopRepeat;
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
    return <primitive object={scene} position={[0, -1, 8.2]} />;
  }

  return (
    <Canvas className={classes.modelContainer}>
      <ambientLight intensity={0.5} color="white" />
      <directionalLight intensity={0.6} color="white" position={[5, 5, 5]} />
      <pointLight intensity={0.8} color="white" position={[-5, -5, -5]} />
      <Model />
      <OrbitControls
        enablePan={false}
        minDistance={9.5}
        maxDistance={10.5}
        zoomSpeed={0.3}
        zoom0={10}
        // args={[camera, document.documentElement]}
        enableRotate={false}
      />
    </Canvas>
  );
}

export default ModelViewer;
