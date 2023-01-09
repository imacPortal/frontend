import React, { useEffect, useState } from 'react'
import axios from 'axios'

import classes from './settings.module.css';

import { API_URI } from '../../constants/apiUrl.constant'
function CancelBooking() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;

    const [report, setReport] = useState([])

    const cancelBooking = (id) => {
        axios.post(`${API_URI}/bookingConf/cancel/${id}`)
            .then(res => {
                alert("data deleted successfully")

            })
            .catch(err => console.log('something went wrong!'))
    }
    useEffect(() => {
        axios.get(`${API_URI}/report/fetchAll`)
            .then(res => {
                setReport(res.data.data)
            })
            .catch(err => console.log('something went wrong!'))
    }, [cancelBooking])

    return (
        <div className={classes.maincancelPanel}>
            <table border='1'>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Reg. No/Employee Id
                    </td>
                    <td>
                        Date
                    </td>
                    <td>
                        Slots
                    </td>
                    <td>
                        Lab
                    </td>
                    <td>
                        No. Of Students
                    </td>
                    <td>
                        Subject
                    </td>
                    <td>
                        Reason
                    </td>
                    <td>
                        System serial No.
                    </td>
                    <td>
                        Cancel Booking
                    </td>
                </tr>
                {
                    report.length !== 0 &&
                    report.map(r => {
                        // console.log(r.date, currentDate)
                        // console.log(Date.parse(r.date), Date.parse(currentDate))
                        return (
                            Date.parse(r.date) >= Date.parse(currentDate) ?
                                r.status != 'cancelled' ?
                                    <tr align="left">
                                        <td>
                                            {r.name}
                                        </td>
                                        <td>
                                            {r.regNo}
                                        </td>
                                        <td>
                                            {r.date}
                                        </td>
                                        <td>
                                            {r.slots}
                                        </td>
                                        <td>
                                            {r.lab}
                                        </td>
                                        <td>
                                            {r.noOfStuds}
                                        </td>
                                        <td>
                                            {r.subject}
                                        </td>
                                        <td>
                                            {r.reason}
                                        </td>
                                        <td>
                                            {r.system.map(s => `${s}, `)}
                                        </td>
                                        <th>
                                            <div className={classes.cancel_btn_cnt}>
                                                <button onClick={() => {
                                                    // console.log(r._id)
                                                    cancelBooking(r._id)
                                                }}>Cancel</button>

                                            </div>
                                        </th>
                                    </tr> :
                                    null
                                : null


                        )
                    }
                    )
                }
            </table>
        </div >
    )
}

export default CancelBooking