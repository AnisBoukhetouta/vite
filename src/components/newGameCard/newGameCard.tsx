import React from "react";
import classes from "./newGameCard1.module.css";

interface Props {
  onSetItem?: (e: any) => void;
  item: any;
}

export default function NewGameCard({ item, onSetItem }: any) {
  const [mouseOver, setMouseOver] = React.useState(false);

  const handleClick = (over: boolean) => {
    onSetItem && onSetItem(item);
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardBody}>
        <div className={classes.bacgroundCard}>
          <div className={classes.wrapper}>
            <div className={classes.vignetteBg} />
            <div className={classes.scrollingBg} />
            <div className={classes.radialGradient} />
            <div className={classes.flash} />
            <div className={classes.bottomGradient} />
          </div>
        </div>
        <img src={item.imageOver} alt="game" className={classes.enlargeImage} />
        <div className={classes.text}>
          <span className={classes.headTitle}>JOIN THE</span>
          <span className={classes.headTitle1}>REWORDS</span>
        </div>
        <div className={`${classes["bar--secondary"]} ${classes.bar}`}></div>
      </div>
    </div>
  );
}
