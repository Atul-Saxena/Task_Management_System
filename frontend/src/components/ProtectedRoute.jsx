import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar';

const ProtectedRoute = ({ children }) => {
    const isUserLoggedIn = localStorage.getItem('authenticated');

    return isUserLoggedIn ?
        <>
            <Navbar />
            {children}
        </>
        : <Navigate to="/login" />;
}

export default ProtectedRoute