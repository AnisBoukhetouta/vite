import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import classes from "./modelBox.module.css";
import TopGames, { Data, Item } from "../topGames/topGames";
import GameCard from "../gameCards/gameCard";
import AppConstants from "../../AppConstants";
import { LinearProgress } from "@mui/material";
import { toDataURL } from "../imageCach";
import Playground from "../../pages/playground/playground";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../../firebase";

export default function ModelBox() {
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);
  const navigate = useNavigate();
  const items: Item[] = [];
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [item, setItem] = useState<any>();
  const getFilesUrl = import.meta.env.VITE_GET_FILES;
  const baseUrl = import.meta.env.VITE_APP_BASE;

  useEffect(() => {
    if (item) {
      setLoading(true);
      toDataURL(item.imageOver, function (dataUrl) {
        setLoading(false);
      });
    }
  }, [item]);

  React.useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        navigate("/regist/login");
      }
    });
    const fetch = async () => {
      try {
        await axios
          .get(getFilesUrl)
          .then((response) => {
            setFetchedData(response.data);
            console.log("FetchedData~~~~~~", response.data);
          })
          .catch((error) => console.log(error));
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  fetchedData.map((data, index) => {
    items.push({
      _id: data._id,
      imageOver: `${baseUrl}/${data.files[0].destination}/${data.files[2].fileName}`,
    });
  });

  return (
    <>
      <Canvas
        camera={{ position: [1, 1, 5], fov: 50 }}
        className={classes.modelBox}
        style={{
          position: "relative",
          backgroundImage: `url(${
            item ? item.imageOver : items.length ? items[0].imageOver : ""
          })`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "Top",
        }}
        shadows
      >
        <Model />
      </Canvas>
      {loading && (
        <LinearProgress className={classes.progressbar} color="error" />
      )}
      {!!view ? (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100vw" }}>
          <Playground item={!!item ? item._id : items[0]._id} />
        </div>
      ) : (
        <>
          {items.length && (
            <div className={classes.miniCard}>
              <GameCard item={item ?? items[0]} link={true} />
              <div className={classes.buttonline}>
                <button
                  className={classes.lobbyHeaderButton}
                  type="button"
                  onClick={() => setView(true)}
                >
                  PLAY NOW
                </button>
              </div>
            </div>
          )}
          <TopGames setItem={setItem} />
        </>
      )}
    </>
  );
}
