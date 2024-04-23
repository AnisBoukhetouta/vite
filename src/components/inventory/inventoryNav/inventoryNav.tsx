import React from "react";
import classes from "./inventoryNav.module.css";

interface Props {
  menu: any[];
  onClick: (key: string) => void;
}

export default function InventoryNav({ menu, onClick }: Props) {
  return (
    <div className={classes.inventoryNavContainer}>
      <div className={classes.inventoryNav}>
        {menu.map((item, key) => (
          <button
            className={classes.inventoryNavButton}
            key={item.id}
            onClick={() => onClick(item.title)}
          >
            <div className={classes.buttonIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="white"
                  d="M16.429 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM4.774 22.502C4.104 20.257 5.784 18 8.127 18h6.604c2.342 0 4.024 2.257 3.353 4.502L17.04 26H5.82l-1.045-3.498ZM24.429 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4.878 13h5.911l1.507-2.876c1.22-2.33-.47-5.124-3.1-5.124h-5.43a3.62 3.62 0 0 0-.422.024c2.248.264 3.702 2.62 2.824 4.79L19.551 26Z"
                ></path>
              </svg>
            </div>
            <div className={classes.buttonTitle}>{item.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
