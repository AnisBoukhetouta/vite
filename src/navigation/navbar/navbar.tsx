import React from "react";
import classes from "./navbar.module.css";

import Container from "@mui/material/Container";

import Navlinks from "../navlinks/navlinks";
import SidebarToggle from "../sidebarToggle/sidebarToggle";

const navbar = (props) => {
  return (
    // <Container maxWidth="xl">
      <header className={classes.navbar}>
        <nav className={classes.links}>
          <Navlinks />
        </nav>

        <SidebarToggle clicked={props.toggleSidebar} />
      </header>
    // </Container>
  );
};

export default navbar;
