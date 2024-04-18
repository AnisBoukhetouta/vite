import React from "react";
import classes from "./gameNavlink.module.css";

import { NavLink } from "react-router-dom";

const GameNavLink = (props) => {
  if (props.disable) {
    return <li className={classes.disabledButton}>{props.children}</li>;
  }
  return (
    <li className={classes.navlink}>
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default GameNavLink;
