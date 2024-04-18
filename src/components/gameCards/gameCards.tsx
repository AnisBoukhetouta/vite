import * as React from "react";
import { Grid } from "@mui/material";
import GameCard from "./gameCard";
import { NavLink } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

export default function GameCards({ cardData }) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <ScrollingCarousel
        children={cardData.map((item) => (
          <NavLink
            key={item._id}
            to="/play"
            state={item}
            style={{ textDecoration: "none" }}
          >
            <GameCard item={item} />
          </NavLink>
        ))}
      />
    </Grid>
  );
}
