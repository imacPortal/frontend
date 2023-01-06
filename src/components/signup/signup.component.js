import React, { useState } from "react";
import Logo1 from "../../assets/SRMLogo.png";
import Login from "../../assets/loginimg.png";
import classes from "./signup.module.css";
import axios from "axios";
import { API_URI } from "../../constants/apiUrl.constant";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SignupComponent() {

  const [email, setEmail] = useState(null)
  const [department, setDepartment] = useState(null)
  const [type, setType] = useState('Staff')
  const [reason, setReason] = useState(null)


  const handleSignup = () => {
    const data = {
      email,
      department,
      type,
      reason
    }

    console.log('data ---',data)

    axios.post(`${API_URI}/auth/signupReq`, data)
      .then(res=>{
        console.log(res.data)
        if(res.data.success){
          toast.success(res.data.status)
          toast.success("You will be recieving a mail with the password once the admin approves the request")
        }else{
          toast(res.data.status, { icon: "⚠️" })
        }
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
            Designed and Developed by students of SRM
          </p>
        </div>
      </div>
      <div className={classes.half}>
        <h1>Sign Up</h1>
        <div className={classes.sub}>
          <p>Enter the following details to request access in the portal</p>
        </div>
        <div className={classes.allignment}>
          <div className={classes.row1}>
            <div className={classes.inputCtn}>
              <label>Email</label>
              <input type="email" placeholder="Ex. abc@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={classes.inputCtn}>
              <label>Department</label>
              <input type="String" placeholder="Ex. CTech, CSBS, etc" onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <div className={classes.inputCtn}>
              <label>User Type</label>
              <select onChange={(e) => setType(e.target.value)}>
                <option>Staff</option>
                <option>Student</option>
              </select>
            </div>
          </div>
          <div className={classes.row1}>
            <div className={classes.inputCtn}>
              <label>Reason</label>
              <textarea type="text" placeholder="Specify the reason for your access(optional for staff, required for students)" onChange={(e) => setReason(e.target.value)} />
            </div>
          </div>
        </div>
        <div className={classes.link}>
              <Link to="/login">Already have Access? Login</Link>
        </div>
        <div className={classes.button}>
          <button onClick={() => { handleSignup() }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
