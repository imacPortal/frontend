import React, {useState} from 'react'
// import HorizontalTimeline from "react-horizontal-timeline";
import classes from "./timeline.module.css";
function TimelineComponent() {
 
  return (
    
      <div className={classes.all}>
        <div className={classes.lables}>
          <span>Enter Booking Details</span>
          <span>Select lab and slot</span>
          <span>Select devices</span>
          <span>Await confirmation</span>
        </div>
        <div className={classes.dots}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.progress}>
          <div className={classes.progressBar}></div>
        </div>
      </div>
    
    )
  }
  
  export default TimelineComponent

