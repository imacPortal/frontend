import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants/routes.constant';

function Navigate() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


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
                    <Route path="*" element={<div>Not Found! <Link to="/">Redirect to home</Link></div>} />
                }
                {
                    !isLoggedIn &&
                    <Route path="*" element={<div>Not Found! <Link to="/home">Redirect to home</Link></div>} />
                }
            </Routes>
        </Router>
    )
}

export default Navigate