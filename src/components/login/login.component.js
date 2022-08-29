import React from "react";
import Logo1 from "../../assets/SRMLogo.png";
import Login from "../../assets/loginimg.png";
import classes from "./login.module.css";
function LoginComponent() {
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
        <h1>Login</h1>
        <div className={classes.sub}>
          <p>Enter the credentials to access the portal</p>
        </div>
        <div className={classes.allignment}>
          <p className={classes.entryText}>Email</p>
          <input className={classes.entry}></input>
          <p className={classes.entryText}>Password</p>
          <input className={classes.entry}></input>
          <div className={classes.color}>
            <p>Forgot Password?</p>
          </div>
        </div>
        <div className={classes.button}>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
