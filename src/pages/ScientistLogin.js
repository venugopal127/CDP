// src/pages/ScientistLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const ScientistLogin = ({ setUserType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Temporarily set the user type to 'scientist' and navigate to the dashboard
    navigate("/sd"); // Adjust the path if needed
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Scientist Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login as Scientist</button>
        </form>
      </div>
    </div>
  );
};

export default ScientistLogin;
