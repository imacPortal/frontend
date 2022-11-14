import React, { useState } from "react";
import Logo1 from "../../assets/SRMLogo.png";
import Login from "../../assets/loginimg.png";
import classes from "./login.module.css";
import axios from "axios";
import { API_URI } from "../../constants/apiUrl.constant";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state';

import { useNavigate } from "react-router";

import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function LoginComponent() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch);


  const handleLogin = () => {
    const data = {
      email,
      password
    }
    axios.post(`${API_URI}/auth/login`, data)
      .then(res => {
        console.log(res.data)
        setUser(res.data.data)
        Cookies.set('uid', res.data.data.id)
        toast.success(`Login Successful`)
        navigate('/')
      }).catch(err => {
        console.log(err)
        toast.error(`Login Failed`)
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
          <p><Link to='/about'>About</Link> | <Link to='/gallery'>Gallery</Link></p>
          <p className={classes.stu}>
            Designed and Develpoed by students of SRM
          </p>
        </div>
      </div>
      <div className={classes.half}>
        <h1>Login</h1>
        <div className={classes.sub}>
          <p>Enter the credentials to access the portal</p>
        </div>
        <div className={classes.allignment}>
          <div className={classes.inputCtn}>
            <label>Email</label>
            <input type="email" placeholder="Ex. John Doe" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={classes.inputCtn}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={classes.link}>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </div>
        <div className={classes.button}>
          <button onClick={() => { handleLogin() }}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
