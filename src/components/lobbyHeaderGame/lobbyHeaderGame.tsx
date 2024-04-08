import React, { useEffect } from "react";
import classes from "./lobbyHeaderGame.module.css";
import AppConstants from "../../AppConstants";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import GameLobbyCard from "../gameCards/gameLobbyCard";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import GameCards from "../gameCards/gameCards";

interface Item {
  _id: string;
  imageOut: string;
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
          .get("http://localhost:6001/api/pwniq/files")
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
      imageOut: `http://localhost:6001/api/pwniq/${data.files[0].destination}/${data.files[0].fileName}`,
      imageOver: `http://localhost:6001/api/pwniq/${data.files[0].destination}/${data.files[2].fileName}`,
    });
  });

  return (
    <div className={classes.lobodyGame}>
      {/* <Typography variant="h4" gutterBottom sx={{ color: "white", ml: 2 }}>
          BY EPIO
        </Typography> */}
      <div className={classes.topGames}>
        {/* <ScrollingCarousel
          children={AppConstants.cardData.map((item) => (
            <GameLobbyCard key={item._id} item={item} />
          ))}
        /> */}
        <Container maxWidth="lg" className={classes.lobbyCardsContainer}>
          <GameCards cardData={items} />
        </Container>
      </div>
    </div>
  );
}
