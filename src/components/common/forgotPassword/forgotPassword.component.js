import React, { useState } from "react";
import Logo1 from "../../../assets/SRMLogo.png";
import Login from "../../../assets/loginimg.png";
import classes from "./forgotPassword.module.css";
import axios from "axios";
import { API_URI } from "../../../constants/apiUrl.constant";


import { useNavigate } from "react-router";

import { Link } from "react-router-dom";

function ForgotPasswordComponent() {

  const [email, setEmail] = useState(null)
  
  const navigate = useNavigate()


  const handleSubmit = () =>{
    const data = {
      email
    }
    axios.post(`${API_URI}/auth/resetPassword`, data)
      .then(res=>{
        alert(res.data.status)
        navigate('/login')
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
              <input type="email" placeholder="Ex. xyz@email.com" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className={classes.link}>
            <Link to="/login">Go Back to Login</Link>
          </div>
        </div>
        <div className={classes.button}>
          <button onClick={()=>{handleSubmit()}}>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordComponent;
