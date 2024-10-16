import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/SignUp.css';

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const userProfile = {
      name,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      cleaningHistory: [] // Initialize an empty cleaning history
    };

    onSignUp(userProfile); // Pass the profile data to App.js for saving

    navigate('/profile'); // Redirect to profile page after sign-up
  };

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form className="signup-form" onSubmit={handleSignUp}>
        <label>Full Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone Number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />

        <label>Zip Code:</label>
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />

        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;