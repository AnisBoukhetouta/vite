import * as React from "react";
import Card from "@mui/material/Card";
import styles from "./card.module.css";

export default function GameCard({ item }) {
  const [mouseOver, setMouseOver] = React.useState("");

  const handlePlay = (key) => {
    console.log("play clicked", key);
  };

  return (
    <Card
      key={item.id}
      sx={{
        minWidth: 180,
        height: 130,
        cursor: "pointer",
        borderRadius: 5,
        boxShadow: 10,
        m: 2,
      }}
      onClick={() => handlePlay(item.id)}
      onMouseOver={() => setMouseOver(item.id)}
      onMouseOut={() => setMouseOver("")}
    >
      <img
        src={mouseOver === item.id ? item.imageOut : item.imageOver}
        alt="game"
        className={styles.image}
      />
    </Card>
  );
}

