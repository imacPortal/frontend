import React from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
import Header2Component from '../common/header2/header2.component'
import LabStatus from './labStatus'

import classes from './dashboard.module.css';

function DashboardComponent() {
  return (
    <div>
      <HeaderComponent/>
      <div className={classes.mainCtn}>
        <SidebarComponent/>
        <div>
          <Header2Component/>    
          <div className={classes.mainArea}>
            <LabStatus />
          </div>
          <div className={classes.BtnCtn}>
            <input type="date"></input>
            <select>
                <option>First hour</option>
                <option>Second Hour</option>
                <option>Third Hour</option>
                <option>Fourth Hour</option>
            </select>
            <button> status </button>
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
 
    )
  }
  
  export default DashboardComponent

