import React from 'react'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'
import StatsComponent from '../common/stats/stats.component'
import Header2Component from '../common/header2/header2.component'
function DashboardComponent() {
  return (
    <div>
      <HeaderComponent/>
      <SidebarComponent/>
      <ReportComponent/>
      <StatsComponent/>
      <Header2Component/>    
    </div>
 
    )
  }
  
  export default DashboardComponent

