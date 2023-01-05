import React from 'react'
import { Helmet } from 'react-helmet'
import CancellationPolicyComponent from '../components/common/cancellationPolicy/cancellationPolicy.component'
function CancellationPolicyPage() {
  return (
    <>
        <Helmet>
            <title>
                iMac Portal | login
            </title>
        </Helmet>
        <CancellationPolicyComponent />
    </>
  )
}

export default CancellationPolicyPage