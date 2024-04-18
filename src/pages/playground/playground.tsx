import React, { useEffect } from "react";
import {
  Alert,
  Box,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Unity, UnityConfig, useUnityContext } from "react-unity-webgl";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./playground.module.css";
import Nebula from "../../components/Nebula/Nebula";

const UnityWrapper = ({ unityConfig }) => {
  const navigate = useNavigate();
  const [completed, setCompleted] = React.useState(false);
  const [view, setView] = React.useState(false);
  const unityContext = useUnityContext(unityConfig);
  const { addEventListener, isLoaded, loadingProgression, sendMessage } =
    unityContext;
  console.log("isLoaded", isLoaded, loadingProgression);

  const onGameState = React.useCallback((state: string) => {
    if (state) {
      console.log("~~~~~~~~~~~~~~~~~~~~~", state);
      setCompleted(!completed);
      setTimeout(() => navigate("/inventory"), 2000);
    }
  }, []);

  useEffect(() => {
    console.log("Initialize Unity Events");
    addEventListener("GameState", onGameState);

    return () => {
      removeEventListener("GameState", onGameState);
    };
  }, [addEventListener, onGameState, removeEventListener]);

  useEffect(() => {
    !!isLoaded && setTimeout(() => setView(true), 2000);
  }, [isLoaded]);

  return (
    <div className={classes.container}>
      {!!completed && (
        <Alert
          variant="filled"
          severity="success"
          color="warning"
          sx={{ position: "absolute", top: "8rem", zIndex: 50 }}
        >
          Congratulations!
          <br />
          You completed all game objects. <br />
          You received a prize.
          <br />
        </Alert>
      )}
      <Unity
        unityProvider={unityContext.unityProvider}
        className={classes.unity}
        style={{
          display: !!view ? "inline" : "none",
        }}
      />
      <div
        className={classes.loader}
        style={{
          display: !view ? "inline" : "none",
        }}
      >
        <Nebula />
      </div>
      <Typography
        style={{
          position: "absolute",
          top: "55vh",
          zIndex: 10000,
          color: "white",
          display: !view ? "inline" : "none",
        }}
      >
        Loading {Math.floor(loadingProgression * 100)} %
      </Typography>
    </div>
  );
};
interface Props {
  item?: any;
}
export default function Playground({ item }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = import.meta.env.VITE_APP_BASE;
  const getFilesUrl = import.meta.env.VITE_GET_FILES;
  const [unityConfig, setUnityConfig] = React.useState<UnityConfig | null>(
    null
  );
  // const state = !!location.state ?? "TEST";
  const state = item ? item : location.state;

  const fetch = async (state) => {
    if (!state) {
      console.log("STATE", state);
      // navigate("/");
    }
    try {
      return axios.get(`${getFilesUrl}?gameTitle=${state}`).then((res) => {
        return res.data[0].files;
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch(state).then((contain) => {
      setUnityConfig({
        loaderUrl: `${baseUrl}/${contain[0].destination}/${contain[6].fileName}`,
        dataUrl: `${baseUrl}/${contain[0].destination}/${contain[3].fileName}`,
        frameworkUrl: `${baseUrl}/${contain[0].destination}/${contain[5].fileName}`,
        codeUrl: `${baseUrl}/${contain[0].destination}/${contain[4].fileName}`,
      });
    });
  }, [state]);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background: "#101014",
          height: "100vh",
        }}
      >
        <div>{!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}</div>
      </Box>
    </>
  );
}
