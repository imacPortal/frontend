import React from 'react'
import classes from './sidebar.module.css'
import { MdSpaceDashboard }  from "react-icons/md"
import { HiOutlineDesktopComputer }  from "react-icons/hi"
import { RiSettings3Line }  from "react-icons/ri"
import { CgProfile }  from "react-icons/cg"

const SidebarComponent = () => {
  return (
    <div className={classes.line}>
      <MdSpaceDashboard className={classes.icon1}/>
      <HiOutlineDesktopComputer className={classes.icon1}/>
      <RiSettings3Line className={classes.icon1}/>
      <CgProfile className={classes.icon1}/>
    </div>
  )
}

export default SidebarComponent