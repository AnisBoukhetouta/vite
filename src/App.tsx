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
import Signup from "./pages/auth/signUp";
import Login from "./pages/auth/logIn";
import User from "./pages/auth/user";
import Inventory from "./pages/inventory/inventory";

const App = () => {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamelobby" element={<GameLobby />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
