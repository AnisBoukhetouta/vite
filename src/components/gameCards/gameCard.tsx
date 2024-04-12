import * as React from "react";
import Card from "@mui/material/Card";
import classes from "./card.module.css";
import { Typography } from "@mui/material";
import CardData from "./gameCardData";

interface Props {
  onSetItem?: (e: any) => void;
  item: any;
}

export default function GameCard({ item, onSetItem }: Props) {
  const [mouseOver, setMouseOver] = React.useState(false);

  const handleClick = (over: boolean) => {
    onSetItem && onSetItem(item);
  };

  return (
    <div className={classes.cardBody}>
      <div className={classes.center}>
        <div className={classes.line}>
          <Card
            key={item._id}
            sx={{
              cursor: "pointer",
              borderRadius: 5,
              boxShadow: 10,
            }}
            className={classes.card}
            onClick={() => handleClick(!mouseOver)}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
          >
            <div className={classes.imageContainer}>
              <img
                src={item.imageOver}
                alt="game"
                className={classes.enlargeImage}
              />
            </div>
          </Card>
        </div>
        <CardData item={item} />
      </div>
    </div>
  );
}
