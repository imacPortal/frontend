import React from 'react'
import classes from './settings.module.css';

function RequestView() {
    return (
        <div className={classes.req_majorCtn}>
            <div className={classes.req_tokenCtn}>
                <h3>request #1</h3>
                <hr />
                <p>Name: samaresh Samanta</p>
                <p>Reason:<br /><i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i></p>
                <p>Lab No.: samaresh Samanta</p>
                <p>Number : samaresh Samanta</p>
            </div>

            <div className={classes.req_tokenCtn}>

            </div>

            <div className={classes.req_tokenCtn}>

            </div>
        </div>
    )
}

export default RequestView
