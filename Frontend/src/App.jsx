import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';
//

// localStorage.setItem("jwtToken", token);
// const storedToken = localStorage.getItem("jwtToken");
// Import pages
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Home from './pages/Home'
import ProtectedRoute from './utils/Protected';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  useEffect(() => {
    
  }, []);
  return (
    <>
      <Routes>
      <Route path="/" element={
        <Home/>
     }/>
        {/* <Route exact path="/signin" element={<LoginPage />} /> */}
        <Route exact path="/home" element={<ProtectedRoute>
         <Dashboard/>
        </ProtectedRoute>} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
