import React, { useState,useEffect } from "react";
import classes from "./report.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { API_URI } from "../../../constants/apiUrl.constant";
import axios from "axios";

import { useSelector } from "react-redux";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {

  const userDetails = useSelector(s=>s.user)

  const [report, setReport] = useState([])

  useEffect(()=>{
    if(userDetails){
      axios.get(`${API_URI}/report/fetchAll/${userDetails.regno}`)
          .then(res=>{
              setReport(res.data.data)
          })
          .catch(err=>console.log('something went wrong!'))
    }
  },[userDetails])


  return (
    <div className={classes.rectangle}>
      {/* <div className={classes.booking}> */}
        <h3>Report</h3>
        <Accordion allowZeroExpanded={true} className={classes.accordianContainer}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                    Booking Report{'  '}
                    <a className={classes.counter1}>{report.length}</a>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{padding:1, height:'50vh', overflow:'scroll'}}>
              <ul className={classes.reportItems}>
                {
                  report.length > 0 &&
                  report.map(r=>
                      <li>
                        <p>Subject: {r.subject}</p>
                        <p>Date: {r.date}</p>
                        <p>systems: {r.system.length}</p>
                      </li>
                    )
                }
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          {/* <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Booking History{'  '}
                    <a className={classes.counter1}>6</a>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>coming soon...</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Cancelled Booking{'  '}
                    <a className={classes.counter2}>1</a>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>coming soon...</p>
            </AccordionItemPanel>
          </AccordionItem> */}
        </Accordion>
      {/* </div> */}
    </div>
  );
}
