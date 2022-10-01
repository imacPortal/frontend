import React from 'react'
import TimelineComponent from '../common/booking/timeline.component'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'

import classes from './accounts.module.css'
import Header2Component from '../common/header2/header2.component'
import FormDisplay from './form'

function AccountComponent() {
    return (
        <div>
            <HeaderComponent/>
            <div className={classes.mainCtn}>
                <SidebarComponent/>
                <div>
                    <Header2Component content={'Your Imac Booking Profile'}/>  
                    <div className={classes.mainArea}>
                        <FormDisplay />
                    </div>
                    <div className={classes.BtnCtn}>
                        <button> Reset Changes </button>
                        <button> Save Changes </button>
                    </div>  
                </div>
                <ReportComponent/>
            </div>
        </div>
    )
}

export default AccountComponent
