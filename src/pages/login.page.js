import React from 'react'
import { Helmet } from 'react-helmet'
import LoginComponent from '../components/login/login.component'

function LoginPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <LoginComponent />
    </>
  )
}

export default LoginPage