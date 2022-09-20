import React, {useState} from 'react'
import HorizontalTimeline from "react-horizontal-timeline";

function TimelineComponent() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
   // Values should be only date
   const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];
  
   // Description array corresponding to values
   const description = [
     "The event of 1 Jan 2021 : Happy New Year",
     "The event of 15 Jan 2021 : Festival",
     "The event of 22 March 2021 : Board Exam",
   ];
  return (
    <div>
    </div>
    )
  }
  
  export default TimelineComponent

