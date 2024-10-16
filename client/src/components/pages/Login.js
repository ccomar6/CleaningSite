import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate retrieving user data from localStorage
    const storedUserProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (storedUserProfile && storedUserProfile.email === email) {
      onLogin(); // Set logged-in state to true
      navigate('/profile'); // Redirect to profile after login
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">Log In</button>
      </form>

      {/* Add a link to the Sign-Up page if the user doesn't have an account */}
      <div className="create-account-section">
        <p>Don't have an account?</p>
        <button className="btn-secondary" onClick={() => navigate('/sign-up')}>
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;