import React, { useEffect, useMemo } from "react";
import Loader from "../../navigation/loader/loader";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Unity, UnityConfig, useUnityContext } from "react-unity-webgl";
import useInterval from "../../hooks/useInterval";
import { useLocation } from "react-router";
import { Data } from "../../components/lobbyHeaderGame/lobbyHeaderGame";
import axios from "axios";

const fetch = async (state) => {
  try {
    return axios
      .get(`http://localhost:5000/files?gameTitle=${state}`)
      .then((res) => {
        console.log("~~~~~~~~~~~~~~~~~~", res.data[0].files);
        return res.data[0].files;
      });
  } catch (e) {
    console.log(e);
  }
};

const UnityWrapper = ({ unityConfig }) => {
  const unityContext = useUnityContext(unityConfig);
  const { isLoaded, loadingProgression, sendMessage } = unityContext;
  console.log('unityConfig', unityConfig)
  console.log('isLoaded', isLoaded, loadingProgression)

  return (
    <Unity
      unityProvider={unityContext.unityProvider}
      style={{
        height: "100%",
        width: "100%",
        background: "#555",
      }}
    />
  );
};

export default function Playground() {
  const location = useLocation();
  const [unityConfig, setUnityConfig] = React.useState<UnityConfig | null>(
    null
  );
  const state = location.state;

  useEffect(() => {
    fetch(state).then((contain) => {
      setUnityConfig({
        loaderUrl: `http://localhost:5000/${contain[0].destination}/${contain[6].fileName}`,
        dataUrl: `http://localhost:5000/${contain[0].destination}/${contain[3].fileName}`,
        frameworkUrl: `http://localhost:5000/${contain[0].destination}/${contain[5].fileName}`,
        codeUrl: `http://localhost:5000/${contain[0].destination}/${contain[4].fileName}`,
      });
    });
  }, [state]);

  // console.log("VVV", unityConfig);

  // const [loadingPercent, setLoadingPercent] = React.useState(0);
  // useInterval(() => {
  //   setLoadingPercent((value) => (value <= 99 ? value + Math.random() : value));
  // }, 100);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          background: "#101014",
          height: "100vh",
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            paddingTop: "4rem",
          }}
        >
          {!!unityConfig && <UnityWrapper unityConfig={unityConfig} />}
        </Container>
      </Box>
    </>
  );
}
