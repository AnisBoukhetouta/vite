import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import { Button, Container, Divider, Typography } from "@mui/material";

const User = () => {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");

  const onLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      user && setUid(user.uid);
    });
  }, []);

  return (
    <div className={classes.authMain}>
      <Container className={classes.formContainer}>
        <img src="/logo.svg" />
        <p className={classes.formLabel}>{`UID : ${uid}`}</p>
        <Button
          type="submit"
          onClick={onLogout}
          variant="contained"
          fullWidth
          sx={{ cursor: "pointer" }}
        >
          Log Out
        </Button>
        <Divider className={classes.divider}>or continue with</Divider>
        <p className={classes.divider}>
          By singning in or signing up, you agree with our <br />
          <NavLink
            className={classes.fontStyle}
            target="blank"
            to="https://www.epicgames.com/site/en-US/privacypolicy?lang=en-US"
          >
            Privacy Policy
          </NavLink>
        </p>
        <Typography sx={{ marginTop: 2 }} className={classes.divider}>
          Create a new account.{" "}
          <NavLink to="/signup" className={classes.fontStyle}>
            Sign Up
          </NavLink>
        </Typography>
      </Container>
    </div>
  );
};

export default User;
