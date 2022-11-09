import React, { useState, useEffect } from "react";
import Logo1 from "../../../assets/SRMLogo.png";
import Login from "../../../assets/loginimg.png";
import classes from "./details.module.css";
import axios from "axios";
import { API_URI } from "../../../constants/apiUrl.constant";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state';

import { useNavigate } from "react-router";

import Cookies from 'js-cookie'

function DetailComponent() {

  const user = useSelector(s=>s.user)

  const [name, setName] = useState(null)
  const [registrationnumber, setRegistrationNumber] = useState(null)
  const [department, setDepartment] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [email, setEmail] = useState(null)

  useEffect(() => {
    if(user)
      setEmail(user.email)
  }, [user])
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch);


  const handleSubmit = () =>{
    const data = {name,registrationnumber,department, phoneNumber, email}
    if(window.confirm("The Details Entered are not reversible. Are you sure?")){
      axios.post(`${API_URI}/auth/setup`,data)
        .then(res=>{
          console.log(res.data)
          setUser(res.data.data)
          Cookies.set('uid', res.data.data.id)
          navigate('/')
        }).catch(err=>{
          console.log(err)
        })
    }
  }

  return (
    <div className={classes.majorContainer}>
      <div className={classes.infoCtn}>
        <div>
          <div className={classes.imgwrapper}>
            <img src={Logo1} className={classes.logo} />
          </div>
          <h1>
            Welcome to the<br></br>iMac Portal
          </h1>
        </div>
        <div className={classes.text}>
          <img src={Login} className={classes.image} />
          <p>About | Gallery</p>
          <p className={classes.stu}>
            Designed and Develpoed by students of SRM
          </p>
        </div>
      </div>
      <div className={classes.half}>
        <h1>Details</h1>
        <div className={classes.sub}>
          <p>Enter the details to finish on boarding</p>
        </div>
        <div className={classes.allignment}>
          <div className={classes.inputCtn}>
              <label>Name</label>
              <input type="name" placeholder="Ex. John Doe" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className={classes.inputCtn}>
              <label>Reg. No/Employee Id</label>
              <input type="registration number" placeholder="Enter your Registration Number" onChange={(e)=>setRegistrationNumber(e.target.value)} />
          </div>
          <div className={classes.inputCtn}>
              <label>Department</label>
              <input type="password" placeholder="Enter your password" onChange={(e)=>setDepartment(e.target.value)} />
          </div>
          <div className={classes.inputCtn}>
              <label>Phone Number</label>
              <input type="password" placeholder="Enter your password" onChange={(e)=>setPhoneNumber(e.target.value)} />
          </div>
        </div>
        <div className={classes.button}>
          <button onClick={()=>{handleSubmit()}}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
