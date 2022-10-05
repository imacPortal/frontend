import React from 'react'

import classes from "./formStyle.module.css"

import LabMap from '../../common/labMap/labMap.component'

function Step2({lab, setLab, slots, setSlots}) {
    return (
        <div className={classes.majorCtn}>
            <h2>Select Lab</h2>
            <div className={classes.labLayout}>
                <div className={classes.mapCtn}>
                    <div className={classes.mapM}>
                        <LabMap lab={lab} setLab={setLab} />
                    </div>
                    <div className={classes.info}>
                        <h5>
                            Lab description:
                        </h5>
                        <table>
                            <tr>
                                <td>
                                    <b>
                                    Computer Model
                                    </b>
                                </td>
                                <td>
                                    Apple Imac M1
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                    Chipset
                                    </b>
                                </td>
                                <td>
                                    {(lab==1 || lab==2)?`Apple M1`:`intel`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                    Computer OS
                                    </b>
                                </td>
                                <td>
                                    macOS Monterey
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                    Ram
                                    </b>
                                </td>
                                <td>
                                   16 GB
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                    No of Devices
                                    </b>
                                </td>
                                <td>
                                    16
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                    Laboratory Coordinator
                                    </b>
                                </td>
                                <td>
                                    Faculty Name
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
            <form className={classes.form}>
                <div>
                    <div className={classes.inputCtn}>
                        <label>Select Time Slot</label>
                        <select onChange={(e)=>{setSlots(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div>
                </div>
                {/* <button className={classes.button}>Next</button> */}
            </form>
        </div>
    )
}

export default Step2
