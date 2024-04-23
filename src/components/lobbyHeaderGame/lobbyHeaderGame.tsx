import React, { useEffect } from "react";
import classes from "./lobbyHeaderGame.module.css";
import axios from "axios";
import GameCards from "../gameCards/gameCards";
import AppConstants from "../../AppConstants";

interface Item {
  _id: string;
  imageOver: string;
}

export interface Data {
  _id: string;
  files: {
    category: string;
    controls: string;
    description: string;
    destination: string;
    enCoding: string;
    fieldName: string;
    fileName: string;
    gameTitle: string;
    gameType: string;
    mimeType: string;
    originalName: string;
    path: string;
    size: string;
    tags: string;
    __v: string;
    _id: string;
  }[];
}

export default function LobbyHeaderGame() {
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);
  const items: Item[] = [];

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(AppConstants.getFilesUrl)
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
      imageOver: `${AppConstants.baseUrl}/${data.files[0].destination}/${data.files[2].fileName}`,
    });
  });

  return (
    <div className={classes.lobodyGame}>
      <div className={classes.topGames}>
        <div className={classes.title}>BY EPIC</div>
        <GameCards cardData={items} />
      </div>
    </div>
  );
}
