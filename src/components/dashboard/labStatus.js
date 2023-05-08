import React, { useState } from 'react'
import LabLayout from '../common/labLayout/labLayout.component'
import LabMap from '../common/labMap/labMap.component'
import ModalComponent from '../common/modal/modal.component'

import classes from './dashboard.module.css'

function LabStatus({setLab,lab,date,slot}) {
    const [showModal, setShowModal] = useState(true)
    return (
        <div className={classes.statusMain}>
            {showModal && <ModalComponent lab={lab} setShowModal={setShowModal}/>}
            <div className={classes.miniMap}>
                <div className={classes.mapM}>
                    <LabMap setLab={setLab} lab={lab} setShowModal={setShowModal}/>
                </div>
            </div>
            <h2>Lab {lab} ({(lab < 3)? 'M1':'Intel'} imac)</h2>
            <div className={classes.labCtn}>
                <LabLayout lab={lab} date={date} slot={slot} />
            </div>
        </div>
    )
}

export default LabStatus
