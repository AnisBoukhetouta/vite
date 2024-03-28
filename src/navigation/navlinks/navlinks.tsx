import React from 'react'
import classes from "./navlinks.module.css"

import Navlink from "../navlink/navlink"

const navlinks = () => {
  return (
    <div>
      <ul className={classes.navlinks}>
        <Navlink link="/">Home</Navlink>
        <Navlink link="/auth">Auth</Navlink>
        <Navlink link="/gamelobby">GameLobby</Navlink>
      </ul>
    </div>
  )
}

export default navlinks