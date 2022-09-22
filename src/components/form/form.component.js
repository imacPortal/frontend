import React, {useState} from "react"
import Logo1 from "../../assets/SRMLogo.png";
import Login from "../../assets/loginimg.png";
import classes from "./form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormComponent() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    
    
    <div className={classes.majorContainer}>
      <div className={classes.infoCtn}>
        <div>
          <div className={classes.imgwrapper}>
            <img src={Logo1} className={classes.logo} />
          </div>
          <h1>Setup your profile</h1>
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
        <h1>Details</h1>
        <div className={classes.sub}>
          <p>Enter the details to finish on boarding</p>
        </div>
        <div className={classes.allignment}>
          <p className={classes.entryText}>Faculty Name</p>
          <input className={classes.entry}></input>
          <p className={classes.entryText}>DOB</p>
          {/* <input className={classes.entry}> */}
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
          {/* </input> */}
        </div>
        <div className={classes.button}>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;