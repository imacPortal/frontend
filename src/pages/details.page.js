import React from 'react'
import { Helmet } from 'react-helmet'
import DetailComponent from '../components/common/Details/details.component'

function DetailPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <DetailComponent />
    </>
  )
}

export default DetailPage