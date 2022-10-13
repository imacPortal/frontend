import React, { useState, useEffect } from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
import Header2Component from '../common/header2/header2.component'

import RequestView from './requestView'

import classes from './settings.module.css';

function SettingsComponent() {
    const [compNo, setCompNo] = useState(1)

  return (
    <div>
      <HeaderComponent/>
      <div className={classes.mainCtn}>
        <SidebarComponent/>
        <div>
          <Header2Component content={'iLab Admin Panel'} showBtn={true}/>    
          <div className={classes.mainArea}>
              {
                  compNo === 1? 
                  <RequestView />
                  :
                  <RequestView />
              }
          </div>
          <div className={classes.BtnCtn}>
            <button onClick={()=>setCompNo(1)}> Requests </button>
            <button onClick={()=>setCompNo(2)}> update lab systems </button>
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
 
    )
  }
  
  export default SettingsComponent
