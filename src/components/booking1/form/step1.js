import React from 'react'

import classes from "./formStyle.module.css"

function Step1({subject, noOfStuds, reason, date, setSubject, setNoOfStuds, setReason, setDate, today}) {

    return (
        <div className={classes.majorCtn}>
            <h2>Booking Details</h2>
            <form className={classes.form}>
                <div>
                    <div className={classes.inputCtn}>
                        <label>Subject</label>
                        <input value={subject} onChange={(e)=>{setSubject(e.target.value)}} placeholder="Operating System, Data Structures..."/>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>No. of students</label>
                        <input value={noOfStuds} onChange={(e)=>{setNoOfStuds(e.target.value)}} placeholder="(Approximate) Ex. 10-20"/>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>Reason</label>
                        <textarea value={reason} onChange={(e)=>{setReason(e.target.value)}} placeholder="for conducting Lab operations regarding VR"/>
                    </div>
                </div>
                <div>
                    <div className={classes.inputCtn}>
                        <label>duration</label>
                        <select>
                            <option>Single Day</option>
                            {/* <option>Multiple Days</option> */}
                        </select>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>Date</label>
                        <input defaultValue={date} type="date" onChange={(e)=>{setDate(e.target.value)}} min={today}/>
                    </div>
                    {/* <div className={classes.inputCtn}>
                        <label>Ending Date</label>
                        <input type="date" placeholder="(Approximate) Ex. 10-20"/>
                    </div> */}
                    {/* <div className={classes.inputCtn}>
                        <label>Select Time Slot</label>
                        <select>
                            <option>First hour</option>
                            <option>Second Hour</option>
                            <option>Third Hour</option>
                            <option>Fourth Hour</option>
                        </select>
                    </div> */}
                </div>
                {/* <button className={classes.button}>Next</button> */}
            </form>
        </div>
    )
}

export default Step1
