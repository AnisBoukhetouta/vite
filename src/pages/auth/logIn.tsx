import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import Logo from "./logo";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [able, setAble] = useState(false);
  const [message, setMessage] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/play");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  const onGoogle = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // User signed in successfully
      // Redirect or perform additional actions as needed
      console.log("SUCCESSFUL");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle error here, e.g., show error message to user
    }
  };

  useEffect(() => {
    if (email.length && password.length) {
      setAble(true);
    } else setAble(false);
  }, [email, password]);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) navigate("/play");
    });
  });

  return (
    <div className={classes.authMain}>
      <Container className={classes.formContainer}>
        <Logo />
        <p className={classes.formLabel}>Sign In</p>
        <div className={classes.errorMessage}>{message}</div>
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
            startIcon={
              <Google sx={{ width: 30, height: 30, marginRight: 1 }} />
            }
            onClick={onGoogle}
          >
            With Google
          </Button>
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
        </form>
        <Typography sx={{ marginTop: 2 }} className={classes.divider}>
          Create a new account.{" "}
          <NavLink to="/regist/signup" className={classes.fontStyle}>
            Sign Up
          </NavLink>
        </Typography>
      </Container>
    </div>
  );
};

export default Login;
