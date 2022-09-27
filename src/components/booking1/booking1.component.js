import React from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
// import Header2Component from '../common/header2/header2.component'
import TimelineComponent from '../common/booking/timeline.component'

import classes from './booking1.module.css';

const BookingComponent = () => {
  return (
    <div>
      <HeaderComponent/>
      <div className={classes.mainCtn}>
        <SidebarComponent/>
        <div>
          <TimelineComponent/>    

        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
  )
}

export default BookingComponent
