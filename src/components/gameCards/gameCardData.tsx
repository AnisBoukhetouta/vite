import React from "react";
import classes from "./card.module.css";
import CardValue from "./gameCardValue";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  item: any;
}
export default function CardData({ item }: Props) {
  return (
    <div className={classes.cardData}>
        <>
          <div className={classes.title}>{item._id}</div>
          <CardValue item={item} />
        </>
    </div>
  );
}
