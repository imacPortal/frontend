import React from "react";
import classes from "./stats.module.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const StatsComponent = () => {
  return (
 <div className={classes.slide}>
  <h2>System Stats</h2>
  <div className={classes.allot}>
    <p>
    <HiOutlineDesktopComputer className={classes.i1} />
    Unavailable
    </p>
    <p>
    <HiOutlineDesktopComputer className={classes.i2} />
    Available
    </p>
    <p>
    <HiOutlineDesktopComputer className={classes.i3} />
    Selected
    </p>
    <p>
    <HiOutlineDesktopComputer className={classes.i4} />
    Not Working
    </p>
  </div>
 </div>

 
  );
};


export default StatsComponent;
