import React, { useEffect, useState } from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi"

import axios from 'axios'
import { API_URI } from "../../../constants/apiUrl.constant";

import classes from './labLayout.module.css'
import toast from 'react-hot-toast';

function LabLayout({ lab, date, slot, setSystem, system }) {
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

    // useEffect(() => {
    //     if(devices){
    //         console.log(devices.find(d=>d.systemNo === 3))
    //     }
    // }, [devices])

    useEffect(() => {
        setDevices(null)
        axios.post(`${API_URI}/system/labFetch`, { labNo: lab })
            .then(res => {
                axios.post(`${API_URI}/bookingConf/fetch`, { lab, date, slots: slot })
                    .then(statusRes => {
                        if (statusRes.data.data) {
                            setSystemsBooked(statusRes.data.data.system)
                        } else {
                            setSystemsBooked([])
                        }
                        setDevices(res.data.data)
                    }).catch(err => {
                        console.log(err)
                    })
            }).catch(err => {
                console.log(err)
            })

        // temporary variable for working offline
        // setSystemsBooked([])
        // setDevices([
        //     {
        //         systemNo:1,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:30,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:3,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:4,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:5,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:6,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:7,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:8,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:20,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:10,
        //         serialNo:"12312"
        //     },
        //     {
        //         systemNo:11,
        //         serialNo:"12312"
        //     }
        // ])
    }, [lab, date, slot])

    const AddDevice = (serialNo) => {
        setSystem([...system, serialNo])
    }
    const removeDevice = (serialNo) => {
        var devices = []
        system.forEach(element => {
            if (element !== serialNo) {
                devices.push(element)
            }
        });
        setSystem(devices)
    }

    const Device = ({ systemNo }) => {
        let serialNo = null
        devices.forEach(d => {
            if (d.systemNo === systemNo) {
                serialNo = d.serialNo
            }
        })
        // if(system){
        //     setSerialNo(system.serialNo)
        // }else{
        //     setSerialNo(null)
        // }
        if (serialNo) {
            return (
                systemsBooked.includes(serialNo) ?
                    <div className={classes.DeviceNotAvailable}>
                        <HiOutlineDesktopComputer onClick={() => toast("already booked!")} />
                    </div> : system ?
                        system.includes(serialNo) ?
                            <div className={classes.DeviceSelected}>
                                <HiOutlineDesktopComputer onClick={() => setSystem ? removeDevice(serialNo) : toast(`Sno:  ${serialNo}`, {
                                    icon: '🖥️',
                                })} />
                            </div> :
                            <div className={classes.DeviceAvailable}>
                                <HiOutlineDesktopComputer onClick={() => setSystem ? AddDevice(serialNo) : toast(`Sno:  ${serialNo}`, {
                                    icon: '🖥️',
                                })} />
                            </div> :
                        <div className={classes.DeviceAvailable}>
                            <HiOutlineDesktopComputer onClick={() => toast(`Sno:  ${serialNo}`, {
                                icon: '🖥️'
                            })} />
                        </div>
            )
        } else {
            return (
                <div className={classes.DeviceNotAvailable}>
                    <HiOutlineDesktopComputer onClick={() => toast("No devices registered!", { icon: '❌' })} />
                </div>
            )
        }
    }

    return (
        (devices && systemsBooked) ?
            <div className={classes.labMain}>
                <div className={classes.cubicleCtn}>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={1} />
                            <Device systemNo={2} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={3} />
                            <Device systemNo={4} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={5} />
                            <Device systemNo={6} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={7} />
                            <Device systemNo={8} />
                        </div>
                    </div>
                    <div className={classes.cubicleS}>
                        <div className={classes.devices}>
                            <Device systemNo={9} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={10} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={11} />
                            <Device systemNo={12} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={13} />
                            <Device systemNo={14} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={15} />
                            <Device systemNo={16} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={17} />
                            <Device systemNo={18} />
                        </div>
                    </div>
                </div>
                <div className={classes.cubicleCtn}>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={19} />
                            <Device systemNo={20} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={21} />
                            <Device systemNo={22} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={23} />
                            <Device systemNo={24} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={25} />
                            <Device systemNo={26} />
                        </div>
                    </div>
                    <div className={classes.cubicleS}>
                        <div className={classes.devices}>
                            <Device systemNo={27} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={28} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={29} />
                            <Device systemNo={30} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={31} />
                            <Device systemNo={32} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={33} />
                            <Device systemNo={34} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={35} />
                            <Device systemNo={36} />
                        </div>
                    </div>
                </div>
                <div className={classes.cubicleCtn}>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={37} />
                            <Device systemNo={38} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={39} />
                            <Device systemNo={40} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={41} />
                            <Device systemNo={42} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={43} />
                            <Device systemNo={44} />
                        </div>
                    </div>
                    <div className={classes.cubicleS}>
                        <div className={classes.devices}>
                            <Device systemNo={45} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={46} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={47} />
                            <Device systemNo={48} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={49} />
                            <Device systemNo={50} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={51} />
                            <Device systemNo={52} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={53} />
                            <Device systemNo={54} />
                        </div>
                    </div>
                </div>
                <div className={classes.cubicleCtn}>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={55} />
                            <Device systemNo={56} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={57} />
                            <Device systemNo={58} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={59} />
                            <Device systemNo={60} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={61} />
                            <Device systemNo={62} />
                        </div>
                    </div>
                    <div className={classes.cubicleS}>
                        <div className={classes.devices}>
                            <Device systemNo={63} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={64} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={65} />
                            <Device systemNo={66} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={67} />
                            <Device systemNo={68} />
                        </div>
                    </div>
                    <div className={classes.cubicle}>
                        <div className={classes.devices}>
                            <Device systemNo={69} />
                            <Device systemNo={70} />
                        </div>
                        <span className={classes.hL}></span>
                        <div className={classes.devices}>
                            <Device systemNo={61} />
                            <Device systemNo={62} />
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
