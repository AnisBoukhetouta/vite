import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import { Button, Container, Divider, Typography } from "@mui/material";
import Logo from "./logo";

const User = () => {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");

  const onLogout = () => {
    auth.signOut();
    navigate("/regist/login");
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUid(user.uid);
      } else navigate("/regist/login");
    });
  }, []);

  return (
    <div className={classes.authMain}>
      <Container className={classes.formContainer}>
        <Logo />
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
            to="/Privacy Policy"
          >
            Privacy Policy
          </NavLink>
        </p>
      </Container>
    </div>
  );
};

export default User;
