import * as React from "react";
import Card from "@mui/material/Card";
import styles from "./card.module.css";
import { Grid } from "@mui/material";

export default function GameCard({ cardData }) {
  const [mouseOver, setMouseOver] = React.useState("");

  const handlePlay = (key) => {
    console.log("play clicked", key);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {cardData.map((item) => (
        <Card
          key={item.id}
          sx={{
            width: 220,
            height: 250,
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
      ))}
    </Grid>
  );
}

// https://ipfs.io/ipfs/QmYh11MqXXwiouftCjnszXiUxo6SJ5HSTJ2ewgcCC8rUes
