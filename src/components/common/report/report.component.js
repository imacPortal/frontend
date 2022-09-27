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
        <Accordion allowZeroExpanded={true} className={classes.accordianContainer}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                    Upcoming Booking{'  '}
                    <a className={classes.counter}>2</a>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>this is the accordian</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Booking History{'  '}
                    <a className={classes.counter1}>6</a>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Cancelled Booking{'  '}
                    <a className={classes.counter2}>1</a>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      {/* </div> */}
    </div>
  );
}
