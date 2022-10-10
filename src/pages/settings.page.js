import React from 'react'
import { Helmet } from 'react-helmet'
import SettingsComponent from '../components/settingsForAdmin/settings.component'

function SettingsPage() {
    return (
        <div>
            <Helmet>
                <title>
                    iMac Portal | Settings
                </title>
            </Helmet>
            <SettingsComponent />
        </div>
    )
}

export default SettingsPage
