import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import LogoB from '../assets/logo.png';

export default function Login() {
  const [user , setUser] = useState({
    email:"",
    password:"",
})
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value} = e.target
    setUser({
        ...user,
        [name]:value
    })
}

console.log(user);
  const handleLogin = (e) => {
    e.preventDefault(); 

    axios.post("http://localhost:8080/login" ,

    {
      email: user.email,
      password: user.password
    } )
    .then((res) => {  
      console.log(res.data);
      if(res.data === "Success"){
        navigate('/proposal');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="container">
      <div className="logoB">
        <img src={LogoB} alt='' />
      </div>

      <div className="login-form">
        <h2 className="login-form-title">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name='email'
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name='password'
              id="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}