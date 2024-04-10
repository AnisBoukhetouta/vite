import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  Apple,
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Stream,
} from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [able, setAble] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
        <p className={classes.formLabel}>Sign In</p>
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
            onClick={onLogin}
            variant="contained"
            fullWidth
            disabled={!able}
            sx={{ cursor: "pointer" }}
          >
            Sign In
          </Button>
          <Divider className={classes.divider}>or continue with</Divider>
          <Button
            className={classes.socialButtons}
            variant="contained"
            fullWidth
            startIcon={<Google sx={{ marginRight: 1 }} />}
          >
            With Google
          </Button>
          <p className={classes.divider}>
            By singning in or signing up, you agree with our <br />
            <NavLink
              className={classes.fontStyle}
              to="https://www.epicgames.com/site/en-US/privacypolicy?lang=en-US"
            >
              Privacy Policy
            </NavLink>
          </p>
        </form>
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

export default Login;
