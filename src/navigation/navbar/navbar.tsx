import React from "react";
import classes from "./navbar.module.css";
import Navlinks from "../navlinks/navlinks";
import SidebarToggle from "../sidebarToggle/sidebarToggle";
import { IconButton } from "@mui/material";
import { Login } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navbar = (props) => {
  return (
    <header className={classes.navbar}>
      <nav className={classes.links}>
        <Navlinks />
      </nav>
      <nav className={classes.links}>
        <NavLink to="/login">
          <IconButton
            className={classes.links}
            sx={{ color: "#ffffff", padding: "var(--padding-1)" }}
            aria-label="login"
          >
            <Login />
          </IconButton>
        </NavLink>
      </nav>

      <SidebarToggle clicked={props.toggleSidebar} />
    </header>
  );
};

export default navbar;
