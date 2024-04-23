import React from "react";
import classes from "./gameSidebar.module.css";

import Container from "@mui/material/Container";

import GameNavlinks from "../navlinks/gameNavlinks";
import Backdrop from "../../components/backdrop/backdrop";

const gameSidebar = (props) => {
  let attachedClasses = [classes.sidebar, classes.close];
  if (props.open) {
    attachedClasses = [classes.sidebar, classes.open];
  }

  return (
    <Container maxWidth="sm">
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <nav>
          <GameNavlinks />
        </nav>
      </div>
    </Container>
  );
};

export default gameSidebar;
