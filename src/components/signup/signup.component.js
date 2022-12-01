import React, { useState } from "react";
import Logo1 from "../../assets/SRMLogo.png";
import Login from "../../assets/loginimg.png";
import classes from "./signup.module.css";
import axios from "axios";
import { API_URI } from "../../constants/apiUrl.constant";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state';

import { useNavigate } from "react-router";

import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SignupComponent() {

  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const [department, setDepartment] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch);


  const handleSignup = () => {
    const data = {
      email,name,
      password,department
    }
    axios.post(`${API_URI}/auth/login`, data)
      .then(res => {
        console.log(res.data)
        setUser(res.data.data)
        Cookies.set('uid', res.data.data.id)
        toast.success(`Sign Up Successful`)
        navigate('/')
      }).catch(err => {
        console.log(err)
        toast.error(`Sign Up Failed`)
      })
  }

  return (
    <div className={classes.majorContainer}>
      <div className={classes.message}>
        <h2>
          Imac Portal Mobile Interface coming soon... <br></br>
          To use the application open it in desktop or tablet.
        </h2>
      </div>
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
          <p><Link to='/about' className={classes.aboutLink}>About</Link> | <Link to='/gallery' className={classes.aboutLink}>Gallery</Link></p>
          <p className={classes.stu}>
            Designed and Develpoed by students of SRM
          </p>
        </div>
      </div>
      <div className={classes.half}>
        <h1>Sign Up</h1>
        <div className={classes.sub}>
          <p>Enter the following details to sign up in the portal</p>
        </div>
        <div className={classes.allignment}>
        <div className={classes.row1}>
          <div className={classes.inputCtn}>
            
            <label>Name</label>
            <input type="text" placeholder="Ex. John Doe" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={classes.inputCtn}>
            <label>Department</label>
            <input type="text" placeholder="Ex. Computer Networks" onChange={(e) => setDepartment(e.target.value)} />
          </div>
          </div>
          <div className={classes.row1}>
          <div className={classes.inputCtn}>
            <label>Email</label>
            <input type="email" placeholder="Ex. abc@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={classes.inputCtn}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          </div>
          <div className={classes.row1}>
          <div className={classes.inputCtn}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter password again" onChange={(e) => setPassword(e.target.value)} />
          </div>
          </div>
        </div>
        <div className={classes.button}>
          <button onClick={() => { handleSignup() }}>Sign Up</button>
  
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
