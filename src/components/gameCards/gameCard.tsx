import * as React from "react";
import Card from "@mui/material/Card";
import classes from "./card.module.css";

interface Props {
  onSetItem?: (e: any) => void;
  item: any;
}

export default function GameCard({ item, onSetItem }: Props) {
  const [mouseOver, setMouseOver] = React.useState("");

  const handlePlay = (key) => {
    console.log("play clicked", key);
  };

  const onMouseOver = (item) => {
    setMouseOver(item.id);
    onSetItem && onSetItem(item);
  };

  return (
    <Card
      key={item.id}
      sx={{
        width: 180,
        height: 130,
        cursor: "pointer",
        borderRadius: 5,
        boxShadow: 10,
        m: 2,
      }}
      onClick={() => handlePlay(item.id)}
      onMouseOver={() => onMouseOver(item)}
      onMouseOut={() => setMouseOver("")}
    >
      <img
        src={mouseOver === item.id ? item.imageOut : item.imageOver}
        alt="game"
        className={classes.image}
      />
    </Card>
  );
}
