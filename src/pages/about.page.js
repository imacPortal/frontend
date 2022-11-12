import React from 'react'
import { Helmet } from 'react-helmet'
import AboutComponent from '../components/about/about.component'
function AboutPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <AboutComponent />
    </>
  )
}

export default AboutPage