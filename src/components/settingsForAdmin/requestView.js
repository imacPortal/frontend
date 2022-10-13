import React, { useEffect,useState } from 'react'
import classes from './settings.module.css';

import axios, { Axios } from 'axios';
import { API_URI } from '../../constants/apiUrl.constant';

function RequestView() {
    const [reqs, setReqs] = useState([])
    
    const fetchData = ()=>{
        axios.get(`${API_URI}/bookingReq/fetch`)
        .then(res=>{
            setReqs(res.data.data)
        }).catch(err=>console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const confirmReqs = (data, id) => {
        let a = window.confirm("Are you sure?")
        if(a){
            console.log(data)
            axios.post(`${API_URI}/bookingConf/add/${id}`, data)
                .then(req=>{
                    if(req.data.status === "Request granted"){
                        alert("Request granted")
                        fetchData()
                    }
                })
                .catch(err=>console.log(err))
        }
        else
            console.log("prevented")

    }

    return (
        <div className={classes.req_majorCtn}>
        {
            reqs.length > 0 ?
            reqs.map((req,index) => (
                    <div className={classes.req_tokenCtn}>
                        <div>
                            <h3>request #{index+1}</h3>
                            <hr />
                            <p>Name: {req.name}</p>
                            <p>Reason:<br /><i>{req.reason}</i></p>
                            <p>Lab No.: {req.lab}</p>
                            <p>systems : {req.system.length}</p>
                        </div>   
                        <div>
                            <button onClick={()=>confirmReqs({ date:req.date, slots:req.slots, lab:req.lab, system:req.system},req._id)}>confirm</button>
                            <button>reject</button>
                        </div>
                    </div>
            )) : <p>Loading...</p>
        }
        </div>
    )
}

export default RequestView
