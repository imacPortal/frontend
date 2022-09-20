import React from 'react'
import { Helmet } from 'react-helmet'
import Booking1Component from '../components/booking1/booking1.component'

function BookingPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <Booking1Component />
    </>
  )
}

export default BookingPage