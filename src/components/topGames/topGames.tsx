import React from "react";
import classes from "./topGames.module.css";
import AppConstants from "../../AppConstants";
import GameCard from "../gameCards/gameCard";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import axios from "axios";
import NewGameCard from "../newGameCard/newGameCard";

interface Props {
  setItem: (e: any) => void;
}

export interface Item {
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
export default function TopGames({ setItem }: Props) {
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);

  const items: Item[] = [];
  const getFilesUrl = import.meta.env.VITE_GET_FILES;
  const baseUrl = import.meta.env.VITE_APP_BASE;

  React.useEffect(() => {
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
    <div className={classes.topGames}>
      <ScrollingCarousel
        children={items.map((item) => (
          <GameCard onSetItem={setItem} key={item._id} item={item} />
        ))}
      />
    </div>
  );
}
