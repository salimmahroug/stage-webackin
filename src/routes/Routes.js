import React from 'react'
import Dashboard from '../pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes