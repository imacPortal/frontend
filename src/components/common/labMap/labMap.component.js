import React from 'react'

import classes from './labMap.module.css'

function LabMap() {
    return (
        <div className={classes.mapMain}> 
            <div className={classes.door1}></div>
            <div className={classes.door2}></div>
            <div className={classes.door3}></div>
            <div className={classes.door4}></div>
            <div className={classes.labRow1}>
                <div className={classes.lab}>
                    <h2>Lab 1</h2>
                </div>
                <div className={classes.lab}>
                    <h2>Lab 2</h2>
                </div>
            </div>
            <div className={classes.pathRow}>
            </div>
            <div className={classes.labRow2}>
                <div className={classes.lab}>
                    <h2>Lab 3</h2>
                </div>
                <div className={classes.lab}>
                    <h2>Lab 4</h2>
                </div>
            </div>
        </div>
    )
}

export default LabMap
