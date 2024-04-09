import React from "react";
import "./App.css";

// import '@fontsource/dela-gothic-one';
import "@fontsource/bebas-neue";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

import Layout from "./navigation/layout/layout";
import GameLobby from "./pages/gameLobby/gameLobby";
import Upload from "./pages/upload/upload";
import Playground from "./pages/playground/playground";

const App = () => {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamelobby" element={<GameLobby />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
