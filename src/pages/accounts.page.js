import React from 'react'
import { Helmet } from 'react-helmet'
import AccountComponent from '../components/accounts/accounts.component'

function AccountsPage() {
    return (
        <div>
            <Helmet>
                <title>
                    iMac Portal | Accounts
                </title>
            </Helmet>
            <AccountComponent />
        </div>
    )
}

export default AccountsPage
