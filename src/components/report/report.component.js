import React, { useState, useEffect } from 'react'
import classes from './report.module.css'

import HeaderComponent from '../common/header/header.component'
import Header2Component from '../common/header2/header2.component'
import SidebarComponent from '../sidebar/sidebar.component'

import axios from 'axios'

import { API_URI } from '../../constants/apiUrl.constant'

function ReportComponent() {

    const [report, setReport] = useState([])

    useEffect(()=>{
        axios.get(`${API_URI}/report/fetchAll`)
            .then(res=>{
                setReport(res.data.data)
            })
            .catch(err=>console.log('something went wrong!'))
    },[])

    return (
        <div>
            <HeaderComponent/>
            <div className={classes.mainCtn}>
                <SidebarComponent/>
                <div>
                    <Header2Component content={'iLab Report'} showBtn={false}/> 
                    <div className={classes.mainReportPanel}>
                        <table border='1'>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Reg. No
                                </td>
                                <td>
                                    Date
                                </td>
                                <td>
                                    Slots
                                </td>
                                <td>
                                    Lab
                                </td>
                                <td>
                                    No. Of Students
                                </td>
                                <td>
                                    Subject
                                </td>
                                <td>
                                    Reason
                                </td>
                                <td>
                                    System serial No.
                                </td>
                            </tr>
                            {
                                report.length !== 0 &&
                                report.map(r=>
                                    <tr align="left">
                                        <td>
                                            {r.name}
                                        </td>
                                        <td>
                                            {r.regNo}
                                        </td>
                                        <td>
                                            {r.date}
                                        </td>
                                        <td>
                                            {r.slots}
                                        </td>
                                        <td>
                                            {r.lab}
                                        </td>
                                        <td>
                                            {r.noOfStuds}
                                        </td>
                                        <td>
                                            {r.subject}
                                        </td>
                                        <td>
                                            {r.reason}
                                        </td>
                                        <td>
                                            {r.system.map(s=>`${s}, `)}
                                        </td>
                                    </tr>
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent
