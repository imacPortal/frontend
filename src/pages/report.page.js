import React from 'react'
import { Helmet } from 'react-helmet'

import ReportComponent from '../components/report/report.component'


function ReportPage() {
    return (
        <>
            <Helmet>
                <title>
                    iMac Portal | dashboard
                </title>
            </Helmet>
            <ReportComponent />
        </>
    )
}

export default ReportPage
