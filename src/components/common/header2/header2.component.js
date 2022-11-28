import React from "react";
import classes from "./header2.module.css";
import ReactToPrint from "react-to-print";

const Header2Component = ({content, showBtn, printRef}) => {
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
      {
        printRef &&
        <div className={classes.main}>
          <div className={classes.btns}>
          <ReactToPrint
          trigger={() => <button style={{backgroundColor:'white'}}>Print</button>}
          content={() => printRef}
        />
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
