import React from "react";
import Loader from "../../navigation/loader/loader";
import { Box, Container, Grid } from "@mui/material";
import { Unity, useUnityContext } from "react-unity-webgl";
import AppConstants from "../../AppConstants";
import useInterval from "../../hooks/useInterval";

export default function Playground() {
  const [loadingPercent, setLoadingPercent] = React.useState(0);
  const unityContext = useUnityContext(AppConstants.unityConfig);
  const { isLoaded, sendMessage } = unityContext;

  //   useInterval(async () => {
  //     try {
  //       if (!isLoaded) {
  //         return;
  //       }

  //       const game = await getGameState();
  //       if (game.race) {
  //         setRace(game.race);
  //         const updatedState = game.race.status;
  //         if (updatedState) {
  //           if (
  //             race.status === RaceState.Ready &&
  //             updatedState === RaceState.Started
  //           ) {
  //             sendMessage("GameController", "StartRaceNow", 45);
  //           }
  //         }
  //       }
  //       if (address && game.tickets) {
  //         const tickets = game.tickets.filter((t) => t.address === address);
  //         dispatch(updateTickets(tickets));
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }, 2000);

  useInterval(() => {
    setLoadingPercent((value) => (value <= 99 ? value + Math.random() : value));
  }, 100);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          background: 'url("/images/home/10303.jpg") no-repeat fixed center',
          height: "100vh",
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            paddingTop: "4rem",
          }}
        >
          <Box>
            {/* <Grid container spacing={0.5}> */}
            {/* <Grid item sm={10} xs={12}> */}
            <div>
              <Unity
                unityProvider={unityContext.unityProvider}
                style={{
                  height: "100%",
                  width: "100%",
                  background: "#555",
                }}
              />
              {!isLoaded && (
                <div className="unity-loader">
                  <div>Loading... {loadingPercent.toFixed(2)}%</div>
                </div>
              )}
            </div>
            {/* </Grid> */}
            {/* <Grid item sm={2} xs={12}>
                <RaceTimer race={race} />
                <HorseOdds />
                <RacePanel
                  status={race?.status}
                  unityContext={unityContext}
                ></RacePanel>
              </Grid> */}
            {/* </Grid> */}
          </Box>
          {/* <Box sx={{ mb: 4 }}>
            <Grid container spacing={1}>
              <Grid item sm={4} xs={12}>
                <PlaceBet race={race} />
              </Grid>
              <Grid item sm={8} xs={12}>
                {ticketView}
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mb: 4 }}>
            <NFTCollection />
          </Box> */}
        </Container>
      </Box>
    </>
  );
}
