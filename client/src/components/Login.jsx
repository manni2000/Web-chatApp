import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';
import { BASE_URL } from '..';
import chatAppLogo from '../photo/chatApp.png';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }

  return (
    <div className="min-w-96 mx-auto login-signup-body">
        <h1 className="text-4xl font-bold text-white">Welcome to Chat App</h1>
        <img 
          src={chatAppLogo} 
          alt="Chat App Logo" 
          className="mx-auto mb-4" 
          style={{ width: '100px', height: '80px' }} 
        />
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-800 bg-opacity-80 border border-gray-600">
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-4">Login</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-center my-2 text-white">
            Don't have an account? <Link to="/signup" className="text-blue-300">Signup</Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700 bg-blue-500 text-white hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
