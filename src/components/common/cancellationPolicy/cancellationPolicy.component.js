import React from "react";
import Header3Component from "../header3/header3.component";
import classes from "./cancellationPolicy.module.css";
// import Login from "../../assets/loginimg.png";

// import Img1 from "../../assets/photos/img1.jpeg";
// import Img2 from "../../assets/photos/img11.jpeg";

const CancellationPolicyComponent = () => {
  return (
    <div>
      <Header3Component />
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.txt}>
            <h1>Cancellation Policy</h1>
          </div>
          <p>
            This is the system reservation Portal designed for the Imac Lab
            which was constructed in 2022 and was developed by the students of
            SRMIST. The Cancellation Policy includes the Cancellation of slots
            are only applicable before 24 hours of the timeslot allocated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyComponent;
