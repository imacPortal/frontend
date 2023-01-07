import React from 'react'
import { Link } from "react-router-dom"
import classes from "./formStyle.module.css"

function Step4() {
    return (
        <div className={classes.majorCtnConfP}>
            <h2>
                Your Request has been processed Succesfully
            </h2>
            <h3>
                Awaiting Confirmation
            </h3>
            <p>
                For more info Contact Admin at <a href="Tele:8334026705">8334026705</a>
            </p>
            <div className="class.link">
        <Link to="/terms">Terms of Use & Cancellation Policy</Link>
      </div>
        </div>

    )
}

export default Step4
