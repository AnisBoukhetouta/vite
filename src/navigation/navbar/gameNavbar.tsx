import React, { useEffect, useState } from "react";
import classes from "./gameNavbar.module.css";
import GameNavlinks from "../navlinks/gameNavlinks";
import { auth } from "../../firebase";
import SearchButton from "../../components/menu/searchButton";
import LanguageButton from "../../components/menu/languageButton";
import LoginButton from "../../components/menu/loginButton";
import Line from "../../components/menu/line";
import DownloadButton from "../../components/menu/dowloadButton";
import EpicButton from "../../components/menu/epicButton";
import SearchInput from "../../components/menu/searchInput";
import { NavLink } from "react-router-dom";
import MenuButton from "../../components/menu/menuButton";

const gameNavbar = (props) => {
  const [uid, setUid] = useState("");
  const [search, setSearch] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      user && setUid(user.uid);
    });
  }, []);

  return (
    <header className={classes.navbar}>
      <nav className={classes.tool}>
        <EpicButton />
        <Line />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.title}>PwnIQ</h1>
        </NavLink>
        <div className={classes.gameNavLinksView}>
          <GameNavlinks />
        </div>
      </nav>
      <div className={classes.tools}>
        {search ? (
          <button
            className={classes.searchButton}
            onClick={() => {
              setSearch(false);
            }}
          >
            <SearchButton />
          </button>
        ) : (
          <SearchInput handleClick={() => setSearch(true)} />
        )}
      </div>
      <nav className={classes.menuTool}>
        <button className={classes.menuButton} onClick={props.toggleSidebar}>
          <MenuButton />
        </button>
      </nav>
    </header>
  );
};

export default gameNavbar;
