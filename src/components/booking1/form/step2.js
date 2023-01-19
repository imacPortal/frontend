import React from 'react'

import classes from "./formStyle.module.css"

import LabMap from '../../common/labMap/labMap.component'

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import Lab11 from '../../../assets/photos/Lab 1.1.jpeg'
import Lab12 from '../../../assets/photos/Lab 1.2.jpeg'
import Lab13 from '../../../assets/photos/Lab 1.3.jpeg'
import Lab14 from '../../../assets/photos/Lab 1.4.jpeg'
import Lab21 from '../../../assets/photos/Lab 2.1.jpeg'
import Lab22 from '../../../assets/photos/Lab 2.2.jpeg'
import Lab23 from '../../../assets/photos/Lab 2.3.jpeg'
import Lab24 from '../../../assets/photos/Lab 2.4.jpeg'
import Lab25 from '../../../assets/photos/Lab 2.5.jpeg'
import Lab31 from '../../../assets/photos/Lab 3.1.jpeg'
import Lab32 from '../../../assets/photos/Lab 3.2.jpeg'
import Lab33 from '../../../assets/photos/Lab 3.3.jpeg'
import Lab34 from '../../../assets/photos/Lab 3.4.jpeg'
import Lab41 from '../../../assets/photos/Lab 4.1.jpeg'
import Lab42 from '../../../assets/photos/Lab 4.2.jpeg'
import Lab43 from '../../../assets/photos/Lab 4.3.jpeg'
import Lab44 from '../../../assets/photos/Lab 4.4.jpeg'
import Lab45 from '../../../assets/photos/Lab 4.5.jpeg'



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
                        {lab === 1 && 
                        <div className={classes.Slide}>
                        <Carousel> 
                            {/* className={classes.Slide}> */}

                            <div className={classes.img}>
                            <img src={Lab11} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab12}/>
                            </div>

                            <div className={classes.img}>
                            <img src={Lab13} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab14} />
                            </div> 

                        
                        </Carousel>
                        </div>}
                        {lab === 2 && 
                        <div className={classes.Slide}>
                        <Carousel>
                        {/* //  className={classes.Slide}> */}

                            <div className={classes.img}>
                            <img src={Lab21} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab22}/>
                            </div>

                            <div className={classes.img}>
                            <img src={Lab23} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab24} />
                            </div> 

                            <div className={classes.img}>
                            <img src={Lab25} />
                            </div> 

                        
                        </Carousel>
                        </div>}
                        {lab === 3 && 
                        <div className={classes.Slide}>
                        <Carousel>
                        {/* //  className={classes.Slide}> */}

                            <div className={classes.img}>
                            <img src={Lab31} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab32}/>
                            </div>

                            <div className={classes.img}>
                            <img src={Lab33} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab34} />
                            </div> 

                        
                        </Carousel>
                        </div>}
                        {lab === 4 && 
                        <div className={classes.Slide}>
                        <Carousel>
                        {/* //  className={classes.Slide}> */}

                            <div className={classes.img}>
                            <img src={Lab41} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab42}/>
                            </div>

                            <div className={classes.img}>
                            <img src={Lab43} />
                            </div>

                            <div className={classes.img}>
                            <img src={Lab44} />
                            </div> 

                            <div className={classes.img}>
                            <img src={Lab45} />
                            </div> 

                        
                        </Carousel>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2
