import React, { useRef } from "react";
import classes from "./topGames.module.css";
import AppConstants from "../../AppConstants";
import GameCard from "../gameCards/gameCard";
import ScrollCarousel from "scroll-carousel-react";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";

interface Props {
  setItem: (e: any) => void;
}

export default function TopGames({setItem} : Props) {
  return (
    <div className={classes.topGames}>
      <ScrollingCarousel
        children={AppConstants.cardData.map((item) => (
          <GameCard onSetItem={setItem} key={item.id} item={item} />
        ))}
      />
    </div>
  );
}
