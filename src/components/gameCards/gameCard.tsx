import * as React from "react";
import Card from "@mui/material/Card";
import classes from "./card.module.css";

interface Props {
  onSetItem?: (e: any) => void;
  item: any;
}

export default function GameCard({ item, onSetItem }: Props) {
  const [mouseOver, setMouseOver] = React.useState(false);

  const handlePlay = (key) => {
    console.log("play clicked", key);
  };

  const onMouseOver = (over: boolean) => {
    setMouseOver(over);
    onSetItem && onSetItem(item);
  };

  return (
    <div>
      <Card
        key={item._id}
        sx={{
          width: 180,
          height: 130,
          cursor: "pointer",
          borderRadius: 5,
          boxShadow: 10,
          m: 2,
        }}
        className={mouseOver ? classes.card : classes.cardOut}
        onClick={() => handlePlay(item._id)}
        onMouseOver={() => onMouseOver(true)}
        onMouseOut={() => onMouseOver(false)}
      >
        <img
          src={!!mouseOver ? item.imageOver : item.imageOut}
          alt="game"
          className={classes.image}
        />
      </Card>
      <h3 style={{ color: "white", textAlign: "center" }}>{item._id}</h3>
    </div>
  );
}
