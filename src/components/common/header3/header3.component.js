import React, { useState } from 'react'
import classes from './header3.module.css'
import { useNavigate } from 'react-router-dom'
import { TiClipboard } from "react-icons/ti"
import { IoMdSettings } from "react-icons/io"
import { RiNotification4Fill } from "react-icons/ri"
// import { AiOutlinePoweroff } from "react-icons/ai"
import { Link } from "react-router-dom";
import Logo1 from "../../../assets/SRMLogo.png"

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state';

import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const Header3Component = () => {

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { setUser } = bindActionCreators(actionCreators, dispatch);
  // const [Conform, setConform] = useState(false)
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   toast.custom((t) => (
  //     <span className='logoutToast'>
  //       Are You Sure?
  //       <div className='toastbtns'>

  //         <button className='classes.toastbtn'
  //           onClick={() => {
  //             toast.dismiss(t.id)
  //             setConform(true)
  //           }}>
  //           OK
  //         </button>
  //         <button onClick={() => toast.dismiss(t.id)}>
  //           Dismiss
  //         </button>
  //       </div>
  //     </span>
  //   ));
  //   if (Conform) {
  //     setUser(null)
  //     Cookies.remove('uid')
  //     toast.success('Logged out!')
  //     navigate('/login')
  //   }
  // }
  return (
    <header className={classes.majorCtn}>
      <div className={classes.logoCtn}>
        <img src={Logo1} className={classes.logo} onClick={()=>{navigate('/')}}/>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/gallery">Gallery</Link></p>
      </div>
      {/* <div className={classes.icons}> */}
        {/* <TiClipboard className={classes.icon1} />
        <IoMdSettings className={classes.icon1} />
        <RiNotification4Fill className={classes.icon1} /> */}
        {/* <button className={classes.btn}> 
          <Link to="/login">Login</Link>
        </button> */}
      {/* </div> */}
    </header>
  )
};

export default Header3Component
