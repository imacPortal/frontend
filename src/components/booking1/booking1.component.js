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
import Step4 from './form/step4'

import classes from './booking1.module.css';

const Step = (n) => {
  switch(n){
    case 1: return <Step1 />
    case 2: return <Step2 />
    case 3: return <Step3 />
    case 4: return <Step4 />
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
          <TimelineComponent stepCounter={stepCounter}/>    
          <div className={classes.mainArea}>
            {
              stepCounter &&
              Step(stepCounter)
            }
          </div>
          <div className={classes.BtnCtn}>
            {
              stepCounter < 4 &&
                <button onClick={()=>stepCounter !== 1? setstepCounter(stepCounter-1):setstepCounter(1)}> Back </button>
              }
              <button onClick={()=>stepCounter !== 4? setstepCounter(stepCounter+1):setstepCounter(4)}> Next </button>
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
  )
}

export default BookingComponent
