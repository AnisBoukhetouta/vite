import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "./context/CharacterAnimations.tsx";

const app = (
  <BrowserRouter>
    <MantineProvider
      withGlobalClasses
      withCssVariables
      theme={{
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }),
      }}
    >
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(app);
