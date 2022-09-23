import React from "react";
import classes from "./header2.module.css";
const Header2Component = () => {
  return (
    <div className={classes.short}>
      <div className={classes.txt}>
        <p>
          iLab Current Status
        </p>
      </div>
      <div className={classes.main}>
        <div className={classes.btns}>
          <button>Map</button>
        </div>
        <div className={classes.btns1}>
          <button>List</button>
        </div>
      </div>
    </div>
  );
};

export default Header2Component;
