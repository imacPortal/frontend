import React from 'react'
import classes from './sidebar.module.css'
import { MdSpaceDashboard }  from "react-icons/md"
import { HiOutlineDesktopComputer }  from "react-icons/hi"
import { RiSettings3Line }  from "react-icons/ri"
import { CgProfile }  from "react-icons/cg"
import { Link } from 'react-router-dom'

const SidebarComponent = () => {
  return (
    <div className={classes.line}>
      <Link to={'/'}>
        <MdSpaceDashboard className={classes.icon1}/>
      </Link>
      <Link to={'/booking'}>
        <HiOutlineDesktopComputer className={classes.icon1}/>
      </Link>
      <Link to={'/'}>
        <RiSettings3Line className={classes.icon1}/>
      </Link>
      <Link to={'/'}>
        <CgProfile className={classes.icon1}/>
      </Link>
    </div>
  )
}

export default SidebarComponent