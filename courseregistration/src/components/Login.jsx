import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/Login.css';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signinType = localStorage.getItem('signinType');
    const endpoint = signinType === 'facultysignin' ? '/facultyDashboard' : '/studentRegistration';

    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate(response.data.redirectUrl);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="avatar-container">
          <CFaUserAlt className="user-icon" color="gray.300" />
        </div>
        <h1 className="heading">Login</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CFaUserAlt className="icon" color="gray.300" />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CFaLock className="icon" color="gray.300" />
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <div className="signup-link">
          New to us? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
