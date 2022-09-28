import React, { useState } from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
// import Header2Component from '../common/header2/header2.component'
import TimelineComponent from '../common/booking/timeline.component'

import Step1 from './form/step1'
import Step2 from './form/step2'
import Step3 from './form/step3'

import classes from './booking1.module.css';

const Step = (n) => {
  switch(n){
    case 1: return <Step1 />
    case 2: return <Step2 />
    default: return <Step3 />
  }
}

const BookingComponent = () => {
  const [stepCounter, setstepCounter] = useState(1)
  return (
    <div>
      <HeaderComponent/>
      <div className={classes.mainCtn}>
        <SidebarComponent/>
        <div>
          <TimelineComponent/>    
          <div className={classes.mainArea}>
            {
              stepCounter &&
              Step(stepCounter)
            }
          </div>
          <div className={classes.BtnCtn}>
            <button onClick={()=>stepCounter !== 1? setstepCounter(stepCounter-1):setstepCounter(1)}> Back </button>
            <button onClick={()=>setstepCounter(stepCounter+1)}> Next </button>
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
  )
}

export default BookingComponent
