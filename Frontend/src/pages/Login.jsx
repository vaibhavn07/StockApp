import React, { useState } from 'react';
import axios  from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

const LoginPage = () => {
  const [loginData , setLoginData] = useState({email:'',password:''});
  const navigate = useNavigate();
  const getUser = async () =>{
    const response = await axios.post('http://localhost:3000/api/v1/user/login',loginData);
    console.log(response);
    if(response.status==404){
      alert('Invalid Credendials ')
    }
    else{
      localStorage.setItem('auth-token',response.data);
    }
  }

  const handleSubmit =async () =>{
    getUser();
    console.log(loginData);
    navigate('/home');
  }
  const handleChange = (e) =>{
    const  name = e.target.name;
    setLoginData({
      ...loginData,
      [name]:e.target.value
    });

  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-indigo-500" >
      <div className="m-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
        <div className="space-y-4" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
          <Link to='/signup'>
          Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
