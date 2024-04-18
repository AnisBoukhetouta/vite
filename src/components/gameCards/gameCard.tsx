import * as React from "react";
import classes from "./card.module.css";
import CardData from "./gameCardData";
import { Skeleton } from "@mui/material";
import { toDataURL } from "../imageCach";

interface Props {
  onSetItem?: (e: any) => void;
  link?: boolean;
  item: any;
}

export default function GameCard({ item, onSetItem, link }: Props) {
  const [mouseOver, setMouseOver] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClick = (over: boolean) => {
    onSetItem && onSetItem(item);
  };

  React.useEffect(() => {
    if (item) {
      setLoading(true);
      toDataURL(item.imageOver, function (dataUrl) {
        // setTimeout(() => {
        //   setLoading(false);
        // }, 3000);
        setLoading(false);
      });
    }
  }, [item]);

  return (
    <div className={classes.cardBody}>
      {item ? (
        <div
          className={classes.center}
          key={item._id}
          onClick={() => handleClick(!mouseOver)}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          <div className={classes.card}>
            <img
              src={item.imageOver}
              alt="game"
              className={classes.enlargeImage}
            />
          </div>
          {!link && <CardData item={item} />}
        </div>
      ) : (
        <Skeleton
          animation="wave"
          variant="rounded"
          width={235}
          sx={{ bgcolor: "grey.900" }}
          height={!link ? 198 : 120}
        />
      )}
    </div>
  );
}
