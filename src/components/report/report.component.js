import React, { useState, useEffect, useRef } from 'react'
import classes from './report.module.css'
import ReactToPrint from "react-to-print";

import HeaderComponent from '../common/header/header.component'
import Header2Component from '../common/header2/header2.component'
import SidebarComponent from '../sidebar/sidebar.component'
import TableComponent from './table.report'

import axios from 'axios'

import { API_URI } from '../../constants/apiUrl.constant'

function ReportComponent() {

    var printRef = useRef()

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
                    <Header2Component content={'iLab Report'} showBtn={false} printRef={false}/>
                    <div className={classes.mainReportPanel}>
                        <ReactToPrint
                            trigger={() => <button style={{backgroundColor:'white',padding:'6px 2rem', marginBottom:'10px'}}>Print</button>}
                            content={() => printRef}
                            />
                        <TableComponent report={report} ref={(el) => (printRef = el)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent
