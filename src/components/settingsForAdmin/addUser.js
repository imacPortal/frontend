import React, { useState, useEffect } from 'react'
import classes from './settings.module.css';

import axios, { Axios } from 'axios';
import { API_URI } from '../../constants/apiUrl.constant';
import toast from 'react-hot-toast';

function AddUser() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [reqList, setReqList] = useState([])

    const fetchData = ()=>{
        axios.get(`${API_URI}/auth/fetchsignupReq`)
            .then(res=>{
                console.log(res.data.data)
                setReqList(res.data.data)
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const confirmReq = (e, p, id)=>{
        const data = {
            email:e,
            password:p
        }
        toast.custom((t) => (
            <span className='logoutToast'>
                Are You Sure?
                <div className='toastbtns'>

                    <button className='classes.toastbtn'
                        onClick={() => {
                            toast.dismiss(t.id)
                            axios.post(`${API_URI}/auth/add`, data)
                                .then(res => {
                                    console.log(res.data)
                                    if (res.data.status === "user added") {
                                        axios.get(`${API_URI}/auth/deleteSignupReq/${id}/nope`)
                                            .then(req=>{
                                                if(req.data.status === "deleted"){
                                                    toast.success(res.data.status)
                                                    fetchData()
                                                }
                                            })
                                            .catch(err=>console.log(err))
                                    }else{
                                        axios.get(`${API_URI}/auth/deleteSignupReq/${id}/nope`)
                                            .then(req=>{
                                                if(req.data.status === "deleted"){
                                                    toast.error(res.data)
                                                    fetchData()
                                                }
                                            })
                                            .catch(err=>console.log(err))
                                    }
                                }).catch(err => {
                                    toast.error("Something went wrong")
                                    console.log(err)
                                })
                        }}>
                        OK
                    </button>
                    <button onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                    </button>
                </div>
            </span>
        ));
    }

    const rejectReq = (id)=>{
        let a = window.confirm("Are you sure?")
        if(a){
            axios.get(`${API_URI}/auth/deleteSignupReq/${id}/sendInfo`)
                .then(req=>{
                    if(req.data.status === "deleted"){
                        alert("Request rejected")
                        fetchData()
                    }
                })
                .catch(err=>console.log(err))
        }
        else
            console.log("prevented")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        toast.custom((t) => (
            <span className='logoutToast'>
                Are You Sure?
                <div className='toastbtns'>

                    <button className='classes.toastbtn'
                        onClick={() => {
                            toast.dismiss(t.id)
                            axios.post(`${API_URI}/auth/add`, data)
                                .then(res => {
                                    console.log(res.data.status)
                                    if (res.data.status === "user added") {
                                        toast.success(res.data.status)
                                    }

                                }).catch(err => {
                                    toast.error("Something went wrong")
                                    console.log(err)
                                })
                        }}>
                        OK
                    </button>
                    <button onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                    </button>
                </div>
            </span>
        ));
    }
    return (
        <div className={classes.add_majorCtn}>
            <h2>Add users and staffs to get access</h2>
            <form className={classes.add_form} onSubmit={(e) => { handleSubmit(e) }}>
                <div className={classes.add_inputCtn}>
                    <label>Email</label>
                    <input value={email} placeholder="Ex. xyz@srmist.edu.in" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={classes.add_inputCtn}>
                    <label>Password</label>
                    <input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className={classes.add_inputCtn}>
                    <label>Designation</label>
                    <input placeholder="Staff/User" disabled />
                </div>
                <div className={classes.add_inputCtn}>
                    <input style={{ backgroundColor: "#FFB830" }} type="submit" value="Add User" />
                </div>
            </form>
            <h2>Add users and staffs to get access</h2>
            <div className={classes.req_majorCtn}>
                {
                    reqList.length > 0 ?
                        reqList.map((rL,index)=>
                        <div className={classes.userReq_tokenCtn} onSubmit={(e) => { handleSubmit(e) }}>
                            <div>
                                <h3>request #{index+1}</h3>
                                <hr />
                                <p>Email: {rL.email}</p>
                                <p>Reason:<br /><i>{rL.reason}</i></p>
                            </div>   
                            <div>
                                <button onClick={()=>confirmReq(rL.email,rL.password,rL._id)}>confirm</button>
                                <button onClick={()=>rejectReq(rL._id)}>reject</button>
                            </div>
                        </div>                            
                        ) :
                        "No requests"
                }
            </div>
        </div>
    )
}

export default AddUser
