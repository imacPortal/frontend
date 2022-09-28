import React from 'react'
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

const BookingComponent = () => {
  return (
    <div>
      <HeaderComponent/>
      <div className={classes.mainCtn}>
        <SidebarComponent/>
        <div>
          <TimelineComponent/>    
          <div className={classes.mainArea}>
            <Step3 />
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
  )
}

export default BookingComponent
