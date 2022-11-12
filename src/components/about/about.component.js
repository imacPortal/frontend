import React from "react";
import Header3Component from "../common/header3/header3.component";
import classes from "./about.module.css";
import Login from "../../assets/loginimg.png";
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
            SRMIST under the supervision of Ms. Sowmya and Ms. B. Ida Seraphim.
            Imac Portal has four labs where CTECH is Lab 1,CINTEL is Lab 2, DSBS
            as Lab 3 and NWC as Lab4.
          </p>
        </div>
        <div className={classes.right}>
          <img src={Login} className={classes.image} />
          <div>
            <img src={Login} className={classes.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
