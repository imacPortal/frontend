import React from "react";
import { Link } from "react-router-dom"
import Header3Component from "../common/header3/header3.component";
import classes from "./about.module.css";
import Login from "../../assets/loginimg.png";
import Img1 from "../../assets/photos/img1.jpeg"
import Img2 from "../../assets/photos/img11.jpeg"

const AboutComponent = () => {
  return (
    <div>
      <Header3Component />
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.txt}>
            <h1>About Us</h1>
          </div>
          <p>
            This is the system reservation Portal designed for the Imac Lab
            which was constructed in 2022 and was developed by the students of
            SRMIST.
            Imac Portal has four labs where CTECH is Lab 1,CINTEL is Lab 2, DSBS
            as Lab 3 and NWC as Lab4.
          </p>
          <h3>Lab 1 ( CTECH )</h3>
          <p>
            The systems in this lab is equipt with the latest M1 Chipset, has 16GB on RAM and the operating system installed in them is macOS Monterey. 
          </p>
          <h3>Lab 2 ( CINTEL )</h3>
          <p>
            The systems in this lab is equipt with the latest M1 Chipset, has 8GB on RAM and the operating system installed in them is macOS Monterey. 
          </p>
          <h3>Lab 3 ( DSBS )</h3>
          <p>
            The systems in this lab is equipt with the intel Chipset, has 8GB on RAM and the operating system installed in them is macOS Monterey. 
          </p>
          <h3>Lab 4 ( NWC )</h3>
          <p>
            The systems in this lab is equipt with the intel Chipset, has 8GB on RAM and the operating system installed in them is macOS Monterey. 
          </p>
          <div className="class.link">

            <Link to="/terms">Terms of Use & Cancellation Policy</Link>

          </div>
        </div>
        
        <div className={classes.right}>
          <img src={Img1} className={classes.image} />
          <div>
            <img src={Img2} className={classes.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
