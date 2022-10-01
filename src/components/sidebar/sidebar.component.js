import React, {useState, useEffect} from 'react'
import classes from './sidebar.module.css'
import { MdSpaceDashboard }  from "react-icons/md"
import { HiOutlineDesktopComputer }  from "react-icons/hi"
import { RiSettings3Line }  from "react-icons/ri"
import { CgProfile }  from "react-icons/cg"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const SidebarComponent = () => {

  const [loc, setLoc] = useState(window.location.pathname)

  useEffect(() => {
    setLoc(window.location.pathname);
  }, [window.location.pathname])


  return (
    <div className={classes.line}>
      <Link to={'/'}>
        <MdSpaceDashboard className={loc == '/'?classes.icon1Selected:classes.icon1}/>
      </Link>
      <Link to={'/booking'}>
        <HiOutlineDesktopComputer className={loc == '/booking'?classes.icon1Selected:classes.icon1}/>
      </Link>
      {/* <Link to={'/settings'}>
        <RiSettings3Line className={classes.icon1}/>
      </Link> */}
      <Link to={'/accounts'}>
        <CgProfile className={loc == '/accounts'?classes.icon1Selected:classes.icon1}/>
      </Link>
    </div>
  )
}

export default SidebarComponent