import React, { useRef } from "react";
import classes from "./topGames.module.css";
import AppConstants from "../../AppConstants";
import GameCard from "../gameCards/gameCard";
import ScrollCarousel from "scroll-carousel-react";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";

export default function TopGames() {
  return (
    <div className={classes.topGames}>
      <ScrollingCarousel
        children={AppConstants.cardData.map((item) => (
          <GameCard key={item.id} item={item} />
        ))}
      />
      {/* {AppConstants.cardData.map((item) => (
          <GameCard key={item.id} item={item} />
        ))} */}
    </div>
  );
}
