import * as React from "react";
import { Grid } from "@mui/material";
import GameCard from "./gameCard";
import { NavLink } from "react-router-dom";

export default function GameCards({ cardData }) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {cardData.map((item) => (
        <NavLink key={item._id} to="/playground" state={item._id}>
          <GameCard item={item} />
        </NavLink>
      ))}
    </Grid>
  );
}
