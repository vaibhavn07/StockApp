import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/Login';
function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const  t = localStorage.getItem('auth-token');
    if(!localStorage.getItem('auth-token')){
      return <LoginPage/>
    }
      return children;

}

export default ProtectedRoute
