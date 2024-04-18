import React from "react";
import classes from "./menu.module.css";
import SearchButton from "./searchButton";
import CloseIcon from "./closeIcon";

interface Props {
  handleClick: () => void;
}

export default function SearchInput({ handleClick }: Props) {
  return (
    <div className={classes.search}>
      <div className={classes.searchInput}>
        <div className={classes.searchButtonIcon}>
          <SearchButton />
        </div>
        <input
          id="search"
          type="text"
          placeholder="Search"
          className={classes.searchInputfield}
        />
        <button className={classes.closeButton} onClick={handleClick}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
