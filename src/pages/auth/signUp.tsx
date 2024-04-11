import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import classes from "./auth.module.css";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [able, setAble] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const {
          uid,
          email,
          metadata: { creationTime, lastSignInTime },
          providerId,
          reloadUserInfo: { localId },
          stsTokenManager: { accessToken, refreshToken },
        } = user;
        const userInfo = {
          email,
          creationTime,
          lastSignInTime,
          uid,
          providerId,
          localId,
          accessToken,
          refreshToken,
        };
        console.log("USERINFO", userInfo);
        try {
          const response = axios.post(
            "https://grat.fun/api/pwniq/userInfo",
            userInfo
          );
          console.log("RESPONSE", response);
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  useEffect(() => {
    if (email.length && password.length) {
      setAble(true);
    } else setAble(false);
  }, [email, password]);

  return (
    <div className={classes.authMain}>
      <Container className={classes.formContainer}>
        <img src="/logo.svg" />
        <p className={classes.formLabel}>Sign Up</p>
        <form className={classes.form}>
          <TextField
            type="email"
            fullWidth
            style={{
              backgroundColor: "#00000000",
              color: "rgb(255, 255, 255)",
              borderRadius: "5px",
            }}
            label="Email Address"
            variant="filled"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            fullWidth
            style={{
              backgroundColor: "#00000000",
              color: "rgb(255, 255, 255)",
              borderRadius: "5px",
            }}
            label="Password"
            variant="filled"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            onClick={onSignUp}
            variant="contained"
            fullWidth
            disabled={!able}
            sx={{ cursor: "pointer" }}
          >
            Sign Up
          </Button>
          <Divider className={classes.divider}>or continue with</Divider>
          <Button
            className={classes.socialButtons}
            variant="contained"
            fullWidth
            startIcon={
              <Google sx={{ width: 30, height: 30, marginRight: 1 }} />
            }
          >
            With Google
          </Button>
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
        </form>
        <Typography sx={{ marginTop: 2 }} className={classes.divider}>
          Already have an account?{" "}
          <NavLink to="/login" className={classes.fontStyle}>
            Sign in
          </NavLink>
        </Typography>
      </Container>
    </div>
  );
};

export default Signup;
