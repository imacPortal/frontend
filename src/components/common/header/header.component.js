import React from 'react'
import classes from './header.module.css'
import { Link } from 'react-router-dom'
import { TiClipboard } from "react-icons/ti"
import { IoMdSettings }  from "react-icons/io"
import { RiNotification4Fill } from "react-icons/ri"
import Logo1 from "../../../assets/SRMLogo.png"

const HeaderComponent = () => {
  return (
    <header className={classes.majorCtn}>
      <div className={classes.logoCtn}>
        <img src={Logo1} className={classes.logo}/>
        <p>About</p>
         <p>Gallery</p>
      </div>
      <div className={classes.icons}>
        <TiClipboard className={classes.icon1}/>
        <IoMdSettings className={classes.icon1}/>
        <RiNotification4Fill className={classes.icon1}/>
        <Link to='/home' className={classes.btn}> 
          Welcome User!
        </Link>
      </div>
    </header>
  )
};

export default HeaderComponent
