import React, { useState } from "react";
import Logo1 from "../../../assets/SRMLogo.png";
import Login from "../../../assets/loginimg.png";
import classes from "./forgotPassword.module.css";
import axios from "axios";
import { API_URI } from "../../../constants/apiUrl.constant";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state';

import { useNavigate } from "react-router";

import Cookies from 'js-cookie'
import { Link } from "react-router-dom";

function ForgotPasswordComponent() {

  const [email, setEmail] = useState(null)
//   const [registrationnumber, setRegistrationNumber] = useState(null)
//   const [password, setPassword] = useState(null)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch);


  const handleLogin = () =>{
    const data = {
      email
    }
    axios.post(`${API_URI}/auth/login`, data)
      .then(res=>{
        console.log(res.data)
        setUser(res.data.data)
        Cookies.set('uid', res.data.data.id)
        navigate('/')
      }).catch(err=>{
        console.log(err)
      })
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
        <h1>Forgot Password</h1>
        <div className={classes.sub}>
          <p>Enter the Email </p>
        </div>
        <div className={classes.allignment}>
          <div className={classes.inputCtn}>
              <label>Email</label>
              <input type="email" placeholder="Ex. John Doe" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className={classes.link}>
            <Link to="/login">Go Back to Login</Link>
          </div>
        </div>
        <div className={classes.button}>
          <button onClick={()=>{handleLogin()}}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordComponent;
