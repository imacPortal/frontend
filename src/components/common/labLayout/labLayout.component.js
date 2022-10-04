import React, { useEffect, useState } from 'react'
import { HiOutlineDesktopComputer }  from "react-icons/hi"

import axios from 'axios'
import { API_URI } from "../../../constants/apiUrl.constant";

import classes from './labLayout.module.css'

function LabLayout({lab}) {
    const [devices, setDevices] = useState(null)

    useEffect(()=>console.log(devices),[devices])

    useEffect(()=>{
        setDevices(null)
        axios.post(`${API_URI}/system/labFetch`,{labNo:lab})
        .then(res=>{
            setDevices(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[lab])
    
    const Device = ({serialNo})=>{
        return(
            <div className={classes.DeviceAvailable}>
                <HiOutlineDesktopComputer className={classes.DeviceAvailable} onClick={()=>console.log(serialNo)}/>
            </div>
        )
    }

    return (
        devices?
        <div className={classes.labMain}> 
            <div className={classes.cubicleCtn}>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device serialNo={devices[0].serialNo} />
                        <Device serialNo={devices[1].serialNo} />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device serialNo={devices[2].serialNo} />
                        <Device serialNo={devices[3].serialNo} />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device serialNo={devices[4].serialNo} />
                        <Device serialNo={devices[5].serialNo} />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device serialNo={devices[6].serialNo} />
                        <Device serialNo={devices[7].serialNo} />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device serialNo={devices[8].serialNo} />
                        <Device serialNo={devices[9].serialNo} />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device serialNo={devices[0].serialNo} />
                        <Device serialNo={devices[0].serialNo} />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
            </div>
            <div className={classes.cubicleCtn}>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
            </div>
            <div className={classes.cubicleCtn}>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
            </div>
            <div className={classes.cubicleCtn}>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
                <div className={classes.cubicle}>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                    <span className={classes.hL}></span>
                    <div className={classes.devices}>
                        <Device />
                        <Device />
                    </div>
                </div>
            </div>
        </div> :
        <div>
            Loading...
        </div>
    )
}

export default LabLayout
