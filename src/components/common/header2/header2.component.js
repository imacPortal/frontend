import React from "react";
import classes from "./header2.module.css";
const Header2Component = ({content, showBtn}) => {
  return (
    <div className={classes.short}>
      <div className={classes.txt}>
        <p>
          {content}
        </p>
      </div>
      {
        showBtn &&
        <div className={classes.main}>
          <div className={classes.btns}>
            <button style={{backgroundColor:'white'}}>Map</button>
          </div>
          {/* <div className={classes.btns1}>
            <button>List</button>
          </div> */}
        </div>
      }
    </div>
  );
};

export default Header2Component;
