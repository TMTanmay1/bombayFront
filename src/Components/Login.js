import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../Styles/Login.css';
import LogoB from '../assets/logo.png'

export default function Login({setLoginUser}) {
  const navigate = useNavigate()

    const [user , setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleLogin = () => {
      axios.post("http://localhost:8080/login" , user)
      .then(res => {alert(res.data.message)
        setLoginUser(res.data.user)
        navigate('/')
          })
      };

  return (
    <div className="container">
      <div   className="logoB">
        <img   src={LogoB} alt=''></img>
      </div>

      <div className="login-form">
        <h2 className="login-form-title">Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name='email'
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
        
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name='password'
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">
            Sign In
          </button>
        </form>
        {/* <div className='logo'>
          <img src={Logo} alt=''></img>
        </div> */}
      </div>
    </div>
  )
}
