import React from 'react'
import LabLayout from '../../common/labLayout/labLayout.component'

import classes from "./formStyle.module.css"

function Step3({system,setSystem,lab,date,slots}) {
    return (
        <div className={classes.majorCtn}>
            <h2>Select Devices</h2>
            <div className={classes.inputCtn} id={classes.opt}>
                <label>Select Booking Type</label>
                <select>
                    <option>Some devices</option>
                    <option>Full Lab</option>
                </select>
            </div>
            <div className={classes.singleLabLayout}>
                <div className={classes.labCtn}>
                    <LabLayout lab={lab} date={date} slot={slots} system={system} setSystem={setSystem}/>
                </div>
            </div>
        </div>
    )
}

export default Step3
