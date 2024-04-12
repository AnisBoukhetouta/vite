import React from "react";
import classes from "./card.module.css";

export default function CardValue({ item }: { item: any }) {
  return (
    <div className={classes.values}>
      <span style={{width:'100%'}}>
        <div className={classes.valueContain}>
          <div className={classes.valuesImg}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path fill="rgba(194, 188, 188, 0.364)" d="M16.429 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM4.774 22.502C4.104 20.257 5.784 18 8.127 18h6.604c2.342 0 4.024 2.257 3.353 4.502L17.04 26H5.82l-1.045-3.498ZM24.429 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4.878 13h5.911l1.507-2.876c1.22-2.33-.47-5.124-3.1-5.124h-5.43a3.62 3.62 0 0 0-.422.024c2.248.264 3.702 2.62 2.824 4.79L19.551 26Z"></path>
            </svg>
          </div>
          <span className={classes.amountValue}>30.2k</span>
          <div data-testid className={classes.valueInc}>All</div>
        </div>
      </span>
    </div>
  );
}
