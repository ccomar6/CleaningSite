import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ userProfile }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user profile and logged-in state from localStorage
    localStorage.removeItem('userProfile');
    navigate('/'); // Redirect to the home page after logout
    window.location.reload(); // Reload to reset the login state in App.js
  };

  if (!userProfile) {
    return <p>No user profile found. Please log in.</p>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {userProfile.name}</p>
      <p><strong>Email:</strong> {userProfile.email}</p>
      <p><strong>Phone:</strong> {userProfile.phone}</p>
      <p><strong>Address:</strong> {userProfile.address}, {userProfile.city}, {userProfile.state}, {userProfile.zipCode}</p>

      <h2>Previous Cleaning History</h2>
      {userProfile.cleaningHistory.length === 0 ? (
        <p>No cleaning history available.</p>
      ) : (
        <ul>
          {userProfile.cleaningHistory.map((cleaning, index) => (
            <li key={index}>
              {cleaning.date} - {cleaning.service} at {cleaning.timeSlot}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleLogout} className="btn-primary">Log Out</button>
    </div>
  );
};

export default Profile;