import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants/routes.constant';

function Navigate() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <Router>
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
                    <Route path="*" element={<div>Already logged in! <Link to="/">Redirect to dashboard</Link></div>} />
                }
                {
                    !isLoggedIn &&
                    <Route path="*" element={<div>Not Found! <Link to="/login">Redirect to Login</Link></div>} />
                }
            </Routes>
        </Router>
    )
}

export default Navigate