import React from 'react'
import './App.css';

// import '@fontsource/dela-gothic-one';
import '@fontsource/bebas-neue';

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import Auth from './pages/auth/auth';

import Layout from './navigation/layout/layout';
import GameLobby from './pages/gameLobby/gameLobby';

const App = () => {
  
  let routes = (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/gamelobby' element={<GameLobby/>}/>
    </Routes>
  )

  return (
    <Layout>
      {routes}
    </Layout>
  )
}

export default App
