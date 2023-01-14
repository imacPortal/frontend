import React from 'react'

import classes from "./formStyle.module.css"

import LabMap from '../../common/labMap/labMap.component'

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import Img1 from '../../../assets/photos/img1.jpeg'
import Img2 from '../../../assets/photos/img2.jpeg'
import Img3 from '../../../assets/photos/img3.jpeg'
import Img4 from '../../../assets/photos/img4.jpeg'

function Step2({lab, setLab, slots, setSlots}) {
    return (
        <div className={classes.majorCtn}>
            <h2>Select Lab</h2>
            <div className={classes.labLayout}>
                <div className={classes.mapCtn}>
                    <div className={classes.mapM}>
                        <LabMap lab={lab} setLab={setLab} />

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
                                    Apple Imac {(lab < 3)?'M1 Chip':'intel Chip'}
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
                                    {(lab==1)?`16 GB`:`8 GB`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                    No of Devices
                                    </b>
                                </td>
                                <td>
                                    32
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

                        <Carousel className={classes.Slide}>

                            <div className={classes.img}>
                            <img src={Img1} />
                            </div>

                            <div className={classes.img}>
                            <img src={Img2}/>
                            </div>

                            <div className={classes.img}>
                            <img src={Img3} />
                            </div>

                            <div className={classes.img}>
                            <img src={Img4} />
                            </div>

                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2
