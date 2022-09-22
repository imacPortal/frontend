import React, {useState} from 'react'
import HorizontalTimeline from "react-horizontal-timeline";
import classes from "./timeline.module.css";
function TimelineComponent() {
 
  return (
    <div>
      <div>
        <p>Select Time Slot</p>
        <p>Select Lab</p>
        <p>Select devices</p>
        <p>Await Confirmation</p>
      </div>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      <hr></hr>
    </div>
    )
  }
  
  export default TimelineComponent

