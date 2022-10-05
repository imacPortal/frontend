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

const BookingComponent = () => {
  const [stepCounter, setstepCounter] = useState(1)
  const [lab, setLab] = useState(1)
  const [subject, setSubject] = useState("")
  const [noOfStuds, setNoOfStuds] = useState("")
  const [reason, setReason] = useState("")
  const [system, setSystem] = useState("")
  const [slots, setSlots] = useState(1)
  const [date, setDate] = useState(()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy+ '-' + mm + '-' + dd ;
    return(today)
  })
  const [today, setToday] = useState(()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy+ '-' + mm + '-' + dd ;
    return(today)
  })

  const display = ()=>{
    console.log(lab)
    console.log(subject)
    console.log(noOfStuds)
    console.log(reason)
    console.log(system)
    console.log(slots)
    console.log(date)
  }

  const Step = (n) => {
    switch(n){
      case 1: return <Step1 
                        subject={subject} 
                        noOfStuds={noOfStuds} 
                        reason={reason} 
                        date={date} 
                        today={today} 
                        setSubject={setSubject}
                        setNoOfStuds={setNoOfStuds}
                        setReason={setReason}
                        setDate={setDate}
                      />
      case 2: return <Step2 
                        lab={lab}
                        setLab={setLab}
                        slots={slots}
                        setSlots={setSlots}
                      />
      case 3: return <Step3 
                        system={system}
                        setSystem={setSystem}
                        lab={lab}
                        date={date}
                        slots={slots}
                      />
      case 4: return <Step4 />
    }
  }
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
              <button onClick={()=>display()}> display </button>
          </div>
        </div>
        <ReportComponent/>
      </div>
      <StatsComponent/>
    </div>
  )
}

export default BookingComponent
