import React from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
function DashboardComponent() {
  return (
    <div>
      <HeaderComponent/>
      <SidebarComponent/>
      <ReportComponent/>
      <StatsComponent/>
    </div>
 
    )
  }
  
  export default DashboardComponent

