import React from "react";
import classes from "./menu.module.css";

export default function DownloadButton() {
  return (
    <button className={classes.downloadButton}>
      <span className={classes.downloadText}>Download</span>
    </button>
  );
}
