import React, { useState } from 'react'
import classes from './header.module.css'
import { useNavigate } from 'react-router-dom'
import { TiClipboard } from "react-icons/ti"
import { IoMdSettings } from "react-icons/io"
import { RiNotification4Fill } from "react-icons/ri"
import { AiOutlinePoweroff } from "react-icons/ai"
import Logo1 from "../../../assets/SRMLogo.png"
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state';

import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const HeaderComponent = () => {

  const userDesig = useSelector(s=>s.user && s.user.designation)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setUser } = bindActionCreators(actionCreators, dispatch);
  const handleLogout = (e) => {
    e.preventDefault();
    toast.custom((t) => (
      <span className='logoutToast'>
        Are You Sure?
        <div className='toastbtns'>

          <button className='classes.toastbtn'
            onClick={() => {
              toast.dismiss(t.id)
              setUser(null)
              Cookies.remove('uid')
              toast.success('Logged out!')
              navigate('/login')
            }}>
            OK
          </button>
          <button onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </div>
      </span>
    ));
  }
  return (
    <header className={classes.majorCtn}>
      <div className={classes.logoCtn}>
        <img src={Logo1} className={classes.logo}/>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/gallery">Gallery</Link></p>
      </div>
      <div className={classes.icons}>
        {
          userDesig==='superadmin' &&
            <Link to="/report">
              <TiClipboard className={classes.icon1}/>
            </Link>
        }
        {
          userDesig==='superadmin' && 
            <Link to="/settings">
              <IoMdSettings className={classes.icon1}/>
            </Link>
        }
        <button onClick={e=>handleLogout(e)} className={classes.btn}> 
          <AiOutlinePoweroff className={classes.icon2}/>
          Logout
        </button>
      </div>
    </header>
  )
};

export default HeaderComponent
