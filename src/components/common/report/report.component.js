import React from "react";
import classes from "./report.module.css";
import { AiFillCaretDown } from "react-icons/ai";

const ReportComponent = () => {
  return (
    <div className={classes.rectangle}>
      <h3>Report<hr/></h3>
      <div className={classes.booking}>
        <div className={classes.ReportCtn}>
          <div>
            <p>Upcoming Booking<hr/></p>
            <p className={classes.counter}>2</p>
          </div>
          <AiFillCaretDown />
        </div>
        <div className={classes.ReportCtn}>
          <div>
            <p>Booking History<hr/></p>
            <p className={classes.counter1}>6</p>
          </div>
          <AiFillCaretDown />
        </div>
        <div className={classes.ReportCtn}>
          <div>
            <p>Cancelled Booking<hr/></p>
            <p className={classes.counter2}>1</p>
          </div>
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
