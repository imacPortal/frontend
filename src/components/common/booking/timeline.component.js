import React, {useState} from 'react'
// import HorizontalTimeline from "react-horizontal-timeline";
import classes from "./timeline.module.css";
function TimelineComponent() {
 
  return (
    
      <div className={classes.all}>
      
        <ul className={classes.bar}>
          <li className={classes.active}>Select Time Slot</li>
          <li className={classes.active}>Select Lab</li>
          <li className={classes.active}>Select devices</li>
          <li className={classes.active}>Await Confirmation</li>
        </ul>
      </div>
    
    )
  }
  
  export default TimelineComponent

