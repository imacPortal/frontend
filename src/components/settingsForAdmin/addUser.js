import React from 'react'
import classes from './settings.module.css';

import axios, { Axios } from 'axios';
import { API_URI } from '../../constants/apiUrl.constant';
import { useState } from 'react';

function AddUser() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            email,
            password
        }
        if(window.confirm("add the user to the imac portal?")){
            // console.log(data)
            axios.post(`${API_URI}/auth/add`,data)
                .then(res=>{
                    console.log(res.data.status)
                    if(res.data.status === "user added"){
                        alert(res.data.status)
                    }

                }).catch(err=>{
                        alert("Something went wrong")
                        console.log(err)
                })
        }
    }
    return (
        <div className={classes.add_majorCtn}>
            <h2>Add users and staffs to get access</h2>
            <form className={classes.add_form} onSubmit={(e)=>{handleSubmit(e)}}>
                <div className={classes.add_inputCtn}>
                    <label>Email</label>
                    <input value={email} placeholder="Ex. xyz@srmist.edu.in" onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className={classes.add_inputCtn}>
                    <label>Password</label>
                    <input type="password" value={password} placeholder="password" onChange={e=>setPassword(e.target.value)} />
                </div>
                <div className={classes.add_inputCtn}>
                    <label>Designation</label>
                    <input placeholder="Staff/User" disabled />
                </div>
                <div className={classes.add_inputCtn}>
                    <input style={{backgroundColor:"#FFB830"}} type="submit" value="Add User"/>
                </div>
            </form>
        </div>
    )
}

export default AddUser
