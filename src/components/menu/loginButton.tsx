import React from "react";
import classes from "./menu.module.css";
import { NavLink } from "react-router-dom";

interface Props {
  uid: string
}

const LoginButton = ({uid} : Props) => {
  return (
    <NavLink to={!!uid ? "/regist/user" : "/regist/login"}>
      <button className={classes.loginButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className={classes.svg1}
        >
          <path
            fill-rule="evenodd"
            fill="rgb(158, 158, 158)"
            d="M16 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm.39 6.75a1.25 1.25 0 0 0-1.226 1.005l-.678 3.392a.75.75 0 1 1-1.471-.294l.678-3.392a2.75 2.75 0 0 1 2.697-2.211h6.72a2.75 2.75 0 0 1 2.697 2.21l.679 3.393a.75.75 0 0 1-1.471.294l-.679-3.392a1.25 1.25 0 0 0-1.226-1.005h-6.72Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </NavLink>
  );
};

export default LoginButton;
