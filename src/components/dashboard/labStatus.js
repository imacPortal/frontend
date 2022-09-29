import React from 'react'
import LabLayout from '../common/labLayout/labLayout.component'

import classes from './dashboard.module.css'

function LabStatus() {
    return (
        <div className={classes.statusMain}>
            <div className={classes.labCtn}>
                <LabLayout />
            </div>
        </div>
    )
}

export default LabStatus
