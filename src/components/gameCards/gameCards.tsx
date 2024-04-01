import * as React from "react";
import { Grid } from "@mui/material";
import GameCard from "./gameCard";

export default function GameCards({ cardData }) {

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {cardData.map((item) => (
        <GameCard item={item} />
      ))}
    </Grid>
  );
}
