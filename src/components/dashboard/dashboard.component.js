import React, { useState, useEffect } from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
import Header2Component from '../common/header2/header2.component'
import LabStatus from './labStatus'

import classes from './dashboard.module.css';

function DashboardComponent() {

  const [date, setDate] = useState(null)
  const [today, setToday] = useState(null)
  const [slot, setSlot] = useState(1)
  const [lab, setLab] = useState(1)

  useEffect(()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy+ '-' + mm + '-' + dd ;
    setDate(today)
    setToday(today)
    // console.log(today)
  },[])

  return (
    date &&
    <div>
      <HeaderComponent/>
      <div className={classes.mainCtn}>
        <SidebarComponent/>
        <div>
          <Header2Component content={'iLab Current Status'} showBtn={true}/>    
          <div className={classes.mainArea}>
            <LabStatus setLab={setLab} lab={lab} date={date} slot={slot} />
          </div>
          <div className={classes.BtnCtn}>
              <input value={date} type="date" onChange={(e)=>{setDate(e.target.value)}} min={today}></input>
            <select onChange={(e)=>{setSlot(e.target.value)}}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <button> check status </button>
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
 
    )
  }
  
  export default DashboardComponent

