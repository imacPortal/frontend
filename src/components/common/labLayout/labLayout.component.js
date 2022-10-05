import React, { useEffect, useState } from 'react'
import { HiOutlineDesktopComputer }  from "react-icons/hi"

import axios from 'axios'
import { API_URI } from "../../../constants/apiUrl.constant";

import classes from './labLayout.module.css'

function LabLayout({lab,date,slot,setSystem,system}) {
    const [devices, setDevices] = useState(null)
    const [systemsBooked, setSystemsBooked] = useState([])

    // useEffect(()=>console.log(systemsBooked),[systemsBooked])
    // useEffect(()=>{
    //     if(setSystem){
    //         console.log('fonund')
    //     }else{
    //         console.log('not found')
    //     }
    // },[])

    useEffect(()=>{
        setDevices(null)
        axios.post(`${API_URI}/system/labFetch`,{labNo:lab})
        .then(res=>{
            axios.post(`${API_URI}/bookingConf/fetch`,{lab,date,slots:slot})
                .then(statusRes=>{
                    if(statusRes.data.data){
                        setSystemsBooked(statusRes.data.data.system)
                    }else{
                        setSystemsBooked([])
                    }
                    setDevices(res.data.data)
                }).catch(err=>{
                    console.log(err)
                })
        }).catch(err=>{
            console.log(err)
        })
    },[lab,date,slot])

    const AddDevice = ()=>{

    }
    const removeDevice = ()=>{
        
    }
    
    const Device = ({serialNo})=>{
        return(
            serialNo ?
                systemsBooked.includes(serialNo) ?
                <div className={classes.DeviceNotAvailable}>
                    <HiOutlineDesktopComputer onClick={()=>alert("already booked!")}/>
                </div> :
                <div className={classes.DeviceAvailable}>
                    <HiOutlineDesktopComputer onClick={()=>setSystem? setSystem([...system, serialNo]):alert(serialNo)}/>
                </div> :
            <div className={classes.DeviceNotAvailable}>
                <HiOutlineDesktopComputer onClick={()=>alert("No devices registered!")}/>
            </div> 
        )
    }

    return (
        (devices&&systemsBooked)?
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
