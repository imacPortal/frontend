import React from 'react'

import classes from "./formStyle.module.css"

function Step1() {
    return (
        <div className={classes.majorCtn}>
            <h2>Booking Details</h2>
            <form className={classes.form}>
                <div>
                    <div className={classes.inputCtn}>
                        <label>Subject</label>
                        <input placeholder="Operating System, Data Structures..."/>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>No. of students</label>
                        <input placeholder="(Approximate) Ex. 10-20"/>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>Reason</label>
                        <textarea placeholder="for conducting Lab operations regarding VR"/>
                    </div>
                </div>
                <div>
                    <div className={classes.inputCtn}>
                        <label>duration</label>
                        <select>
                            <option>Single Day</option>
                            <option>Multiple Days</option>
                        </select>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>Starting Date</label>
                        <input type="date" placeholder="(Approximate) Ex. 10-20"/>
                    </div>
                    <div className={classes.inputCtn}>
                        <label>Ending Date</label>
                        <input type="date" placeholder="(Approximate) Ex. 10-20"/>
                    </div>
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
