import React, { useEffect } from "react";
import {
  Alert,
  Box,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Unity, UnityConfig, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./playground.module.css";
import Nebula from "../../components/Nebula/Nebula";
import { getAuth } from "firebase/auth";
import AppConstants from "../../AppConstants";

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

  const sendDataToUnity = (userName) => {
    if (unityContext) {
      unityContext.sendMessage("RoomController", "ReceiveDataFromWeb", userName);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const { displayName } = auth.currentUser;
    const dataToSend = displayName ?? "Noob000001"; // Replace with your data
    sendDataToUnity(dataToSend);
  });

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
  const [unityConfig, setUnityConfig] = React.useState<UnityConfig | null>(
    null
  );
  const state = item;

  const fetch = async (state) => {
    if (!state) {
      console.log("STATE", state);
      // navigate("/");
    }
    try {
      return axios
        .get(`${AppConstants.getFilesUrl}?gameTitle=${state}`)
        .then((res) => {
          return res.data[0].files;
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch(state).then((contain) => {
      setUnityConfig({
        loaderUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[6].fileName}`,
        dataUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[3].fileName}`,
        frameworkUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[5].fileName}`,
        codeUrl: `${AppConstants.baseUrl}/${contain[0].destination}/${contain[4].fileName}`,
      });
    });
  }, [state]);

  return (
    <Box
      component="main"
      sx={{
        background: "#101014",
      }}
    >
      <div>{!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}</div>
    </Box>
  );
}
