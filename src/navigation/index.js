import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants/routes.constant';

import DetailPage from '../pages/details.page';

function Navigation({isLoggedIn, onBoarding}) {

    console.log("onBoarding", onBoarding)

    return (
        <Router>
            {
                onBoarding ?
                <Routes>
                    <Route path="*" element={<DetailPage/>} />
                </Routes>:
                <Routes>
                    {
                        isLoggedIn &&
                        PRIVATE_ROUTES.map(route=>
                            <Route path={route.path} element={route.component} key={route.path}/>
                        )
                    }
                    {
                        !isLoggedIn &&
                        PUBLIC_ROUTES.map(route=>
                            <Route path={route.path} element={route.component} key={route.path}/>
                        )
                    }
                    {
                        isLoggedIn &&
                        <Route path="*" element={<Navigate to="/" />} />
                    }
                    {
                        !isLoggedIn &&
                        <Route path="*" element={<Navigate to="/login" />} />
                    }
                </Routes>
            }
        </Router>
    )
}

export default Navigation