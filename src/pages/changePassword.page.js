import React from 'react'
import { Helmet } from 'react-helmet'
import ChangePasswordComponent from '../components/common/changePassword/changePassword.components'
function ChangePasswordPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <ChangePasswordComponent />
    </>
  )
}

export default ChangePasswordPage