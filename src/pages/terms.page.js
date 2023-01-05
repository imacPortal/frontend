import React from 'react'
import TermsComponent from '../components/terms/terms.component'
import Helmet from "react-helmet"

function TermsPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | dashboard
            </title>
        </Helmet>
        <TermsComponent />
    </>
  )
}

export default TermsPage