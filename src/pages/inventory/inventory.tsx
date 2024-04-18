import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./inventory.module.css";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { auth } from "../../firebase";
import { OrbitControls } from "@react-three/drei";
import { UserCharacter } from "../../components/userCharacter";
import { useNavigate } from "react-router-dom";
import InventoryBody from "../../components/charactory/charactory";

export default function Inventory() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(0);
  const [characterOptions, setCharacterOptions] = useState(false);

  const baseUrl = import.meta.env.VITE_APP_BASE;
  const getCharacterFile = import.meta.env.VITE_GET_CHARACTER_FILE;
  const [uid, setUid] = useState("");
  const [fetchedCharacters, setFetchedCharacters] = useState([]);

  useEffect(() => {
    const getModel = async () => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setUid(user.uid);
        } else {
          navigate("/regist/login");
        }
      });
      try {
        if (uid) {
          const response = await axios.get(`${getCharacterFile}?uid=${uid}`);
          console.log("FetchedModel~~~~~~", response.data);
          setFetchedCharacters(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getModel();
  }, [uid, navigate]);

  const handleMenuClick = (key) => {
    setTitle(key);
    setCharacterOptions(false);
  };

  return (
    <div className={classes.inventoryMain}>
      <div className={classes.inventoryMenu}>
        <div className={classes.inventoryMenuBody}>
          {menu.map((item, key) => (
            <button
              className={classes.inventoryMenuButton}
              key={item.id}
              onClick={() => handleMenuClick(key)}
            >
              <div className={classes.buttonIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    fill="white"
                    d="M16.429 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM4.774 22.502C4.104 20.257 5.784 18 8.127 18h6.604c2.342 0 4.024 2.257 3.353 4.502L17.04 26H5.82l-1.045-3.498ZM24.429 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4.878 13h5.911l1.507-2.876c1.22-2.33-.47-5.124-3.1-5.124h-5.43a3.62 3.62 0 0 0-.422.024c2.248.264 3.702 2.62 2.824 4.79L19.551 26Z"
                  ></path>
                </svg>
              </div>
              <div className={classes.buttonTitle}>{item.title}</div>
            </button>
          ))}
        </div>
      </div>
      <div className={classes.inventoryBody}>
        <InventoryBody
          characterOptions={characterOptions}
          menu={menu}
          title={title}
          setCharacterOptions={() => setCharacterOptions(true)}
        />
      </div>
    </div>
  );
}

const menu = [
  { id: 0, title: "CHARACTER" },
  { id: 1, title: "EMOTES" },
  { id: 2, title: "WRAPS" },
  { id: 3, title: "LOBBY" },
  { id: 4, title: "INSTRUMENTS" },
  { id: 5, title: "CARS" },
  { id: 6, title: "JAM TRACKS" },
];

{
  /* {fetchedCharacters.map((character) => {
          let { destination, fileName } = character;
          return (
            <Container key={fileName} className={classes.inventoryContainer}>
              <Canvas
                camera={{ position: [1, 1, 5], fov: 50 }}
                className={classes.modelBox}
                style={{
                  position: "relative",
                  // backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "Top",
                }}
                shadows
              >
                <OrbitControls
                  minAzimuthAngle={0.2}
                  maxAzimuthAngle={0.2}
                  minPolarAngle={1.34}
                  maxPolarAngle={1.34}
                  minDistance={7}
                  maxDistance={7}
                />
                <ambientLight />
                <directionalLight
                  position={[-5, 5, 5]}
                  castShadow
                  shadow-mapSize={1024}
                />
                <group position={[0.8, 0, 3.5]}>
                  <UserCharacter
                    key={fileName}
                    character={`${baseUrl}/${destination}/${fileName}`}
                  />
                </group>
                <mesh
                  rotation={[-0.5 * Math.PI, 0, 0]}
                  position={[0, -1, 0]}
                  receiveShadow
                >
                  <planeGeometry args={[10, 10, 1, 1]} />
                  <shadowMaterial transparent opacity={0.2} />
                </mesh>
              </Canvas>
            </Container>
          );
        })} */
}
