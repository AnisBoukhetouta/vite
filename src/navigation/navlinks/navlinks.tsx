import * as React from "react";
import classes from "./navlinks.module.css";
import Navlink from "../navlink/navlink";

const navlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <Navlink link="/upload">Upload</Navlink>
      </ul>
    </div>
  );
};

export default navlinks;
