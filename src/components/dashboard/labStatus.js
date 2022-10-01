import React from 'react'
import LabLayout from '../common/labLayout/labLayout.component'
import LabMap from '../common/labMap/labMap.component'

import classes from './dashboard.module.css'

function LabStatus() {
    return (
        <div className={classes.statusMain}>
            <div className={classes.miniMap}>
                <div className={classes.mapM}>
                    <LabMap />
                </div>
            </div>
            <h2>Lab 1 (Imac M1 16GB)</h2>
            <div className={classes.labCtn}>
                <LabLayout />
            </div>
        </div>
    )
}

export default LabStatus
