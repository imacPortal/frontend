import React from "react";
import classes from "./report.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <div className={classes.rectangle}>
      {/* <div className={classes.booking}> */}
        <h3>Report</h3>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={classes.ReportCtn}>
                  <div>
                    <p>Upcoming Booking</p>
                    <p className={classes.counter}>2</p>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={classes.ReportCtn}>
                  <div>
                    <p>Booking History</p>
                    <p className={classes.counter1}>6</p>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={classes.ReportCtn}>
                  <div>
                    <p>Cancelled Booking</p>
                    <p className={classes.counter2}>1</p>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      {/* </div> */}
    </div>
  );
}
