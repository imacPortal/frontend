import React, {useState} from 'react'
import TimelineComponent from '../common/booking/timeline.component'
import HeaderComponent from '../common/header/header.component'
import SidebarComponent from '../sidebar/sidebar.component'
import ReportComponent from '../common/report/report.component'

import { useSelector } from 'react-redux'

import classes from './accounts.module.css'
import Header2Component from '../common/header2/header2.component'
import FormDisplay from './form'

import axios from 'axios'
import { API_URI } from '../../constants/apiUrl.constant'

function AccountComponent() {

    const userDetails = useSelector(s=>s.user)

    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const handleSubmit = () =>{
        const data = {newPassword}
        if( newPassword != null && newPassword === confirmPassword){
            axios.post(`${API_URI}/auth/changePassword/${userDetails.email}`, data)
                .then(res=>{
                    alert(res.data.status)
                })
        }else{
            alert("both the passwords doesn't match")
        }
    }

    return (
        <div>
            <HeaderComponent/>
            <div className={classes.mainCtn}>
                <SidebarComponent/>
                <div>
                    <Header2Component content={'Your Imac Booking Profile'}/>  
                    <div className={classes.mainArea}>
                        <FormDisplay setConfirmPassword={setConfirmPassword} setNewPassword={setNewPassword} />
                    </div>
                    <div className={classes.BtnCtn}>
                        <button onClick={()=>handleSubmit()} disabled={false}> Save Changes </button>
                    </div>  
                </div>
                <ReportComponent/>
            </div>
        </div>
    )
}

export default AccountComponent
