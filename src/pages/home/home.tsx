import React from "react";
import classes from "./home.module.css";
import Container from "@mui/material/Container";

const home = () => {
  return (
    <Container maxWidth="xl">
      <img
        className={classes.homeBackground}
        src="/src/public/images/home/LexSchoolHome.png"
        alt="home"
      />
    </Container>
  );
};

export default home;
