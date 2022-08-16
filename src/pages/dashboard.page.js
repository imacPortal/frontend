import React from 'react'
import DashboardComponent from '../components/dashboard/dashboard.component'
import Helmet from "react-helmet"

function DashboardPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | dashboard
            </title>
        </Helmet>
        <DashboardComponent />
    </>
  )
}

export default DashboardPage