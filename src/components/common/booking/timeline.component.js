import React, {useState} from 'react'
// import HorizontalTimeline from "react-horizontal-timeline";
import classes from "./timeline.module.css";
function TimelineComponent({stepCounter}) {
  return (
    
      <div className={classes.all}>
        <div className={classes.lables}>
          <span>Enter Booking Details</span>
          <span>Select lab and slot</span>
          <span>Select devices</span>
          <span>Await confirmation</span>
        </div>
        <div className={classes.dots}>
          <span style={{backgroundColor:stepCounter >= 1 ? "#FFB830": "#ffe6b8"}}></span>
          <span style={{backgroundColor:stepCounter >= 2 ? "#FFB830": "#ffe6b8"}}></span>
          <span style={{backgroundColor:stepCounter >= 3 ? "#FFB830": "#ffe6b8"}}></span>
          <span style={{backgroundColor:stepCounter == 4 ? "#FFB830": "#ffe6b8"}}></span>
        </div>
        <div className={classes.progress}>
          <div className={classes.progressBar} style={{width:stepCounter == 1?"0%":stepCounter == 2?"34%":stepCounter == 3?"66%":"100%"}}></div>
        </div>
      </div>
    
    )
  }
  
  export default TimelineComponent

