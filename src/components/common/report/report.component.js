import React from "react";
import classes from "./report.module.css";
import { AiFillCaretDown } from "react-icons/ai";

const ReportComponent = () => {
  return (
    <div className={classes.rectangle}>
      <h3>Report</h3>
      <div className={classes.booking}>
        <div className={classes.ReportCtn}>
          <div>
            <p>upcoming booking</p>
            <p className={classes.counter}>6</p>
          </div>
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
