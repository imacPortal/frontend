import React from 'react'
import { Helmet } from 'react-helmet'
import ForgotPasswordComponent from '../components/common/forgotPassword/forgotPassword.component'
function ForgotPasswordPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <ForgotPasswordComponent />
    </>
  )
}

export default ForgotPasswordPage