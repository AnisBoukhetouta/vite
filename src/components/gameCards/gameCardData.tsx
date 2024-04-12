import React from "react";
import classes from "./card.module.css";
import CardValue from "./gameCardValue";

interface Props {
  item: any;
}
export default function CardData({ item }: Props) {
  return (
    <>
      <div className={classes.title}>Title</div>
      <CardValue item={item} />
    </>
  );
}
