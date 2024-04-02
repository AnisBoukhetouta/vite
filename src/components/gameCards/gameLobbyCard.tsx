import * as React from "react";
import Card from "@mui/material/Card";
import classes from "./card.module.css";
import { Typography } from "@mui/material";

export default function GameLobbyCard({ item }) {
  const [mouseOver, setMouseOver] = React.useState("");

  const handlePlay = (key) => {
    console.log("play clicked", key);
  };

  return (
    <Card
      key={item.id}
      sx={{
        width: "180px",
        height: 130,
        cursor: "pointer",
        borderRadius: 5,
        boxShadow: 10,
        m: 2,
      }}
      className={mouseOver && classes.card}
      onClick={() => handlePlay(item.id)}
      onMouseOver={() => setMouseOver(item.id)}
      onMouseOut={() => setMouseOver("")}
    >
      <img src={item.imageOver} alt="game" className={classes.image} />
      <Typography sx={{ fontSize: 14, color: "white" }}>Title</Typography>
    </Card>
  );
}
