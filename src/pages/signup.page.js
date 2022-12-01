import React from 'react'
import { Helmet } from 'react-helmet'
import SignupComponent from '../components/signup/signup.component'

function SignupPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <SignupComponent />
    </>
  )
}

export default SignupPage