import React from 'react'
import { Helmet } from 'react-helmet'
import BookingComponent from '../components/booking1/booking1.component'

function BookingPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <BookingComponent />
    </>
  )
}

export default BookingPage