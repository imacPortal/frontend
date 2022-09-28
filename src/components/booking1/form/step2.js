import React from 'react'

import classes from "./formStyle.module.css"

function Step2() {
    return (
        <div className={classes.majorCtn}>
            <h2>Select Lab</h2>
            <div className={classes.labLayout}>
                <div className={classes.mapCtn}>
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
                                    Apple M1
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
                        <select>
                            <option>First hour</option>
                            <option>Second Hour</option>
                            <option>Third Hour</option>
                            <option>Fourth Hour</option>
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
