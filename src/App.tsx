import React from "react";
import "./App.css";

// import '@fontsource/dela-gothic-one';
import "@fontsource/bebas-neue";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

import PageLayout from "./navigation/layout/pagelayout";
import GameLayout from "./navigation/layout/gamelayout";
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
      <Route
        path="/"
        element={
          <PageLayout>
            <GameLobby />
          </PageLayout>
        }
      />
      <Route path="/regist">
        <Route
          index
          path="login"
          element={
            <PageLayout>
              <Login />
            </PageLayout>
          }
        />
        <Route
          path="signup"
          element={
            <PageLayout>
              <Signup />
            </PageLayout>
          }
        />
        <Route
          path="user"
          element={
            <PageLayout>
              <User />
            </PageLayout>
          }
        />
      </Route>
      <Route
        path="/upload"
        element={
          <PageLayout>
            <Upload />
          </PageLayout>
        }
      />
      <Route
        path="/play"
        element={
          <GameLayout>
            <Home />
          </GameLayout>
        }
      />
      <Route
        path="/*"
        element={
          <GameLayout>
            <Home />
          </GameLayout>
        }
      />
      <Route
        path="/inventory"
        element={
          <GameLayout>
            <Inventory />
          </GameLayout>
        }
      />
    </Routes>
  );

  return <>{routes}</>;
};

export default App;
