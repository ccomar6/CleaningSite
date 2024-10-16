import React from 'react';
import '../styling/ServiceDetails.css';

const MoveOutCleaning = () => {
  return (
    <div className="service-details-container">
      <h1>Move-In/Move-Out Cleaning</h1>
      <p>
        Our move-in/move-out cleaning services ensure that your new or former home is spotless and ready for the next occupant.
      </p>
      <ul>
        <li>Complete deep cleaning of the entire home</li>
        <li>Sanitizing bathrooms and kitchens</li>
        <li>Detailed cleaning of all floors, carpets, and windows</li>
        <li>Remove all dust and debris from empty rooms</li>
      </ul>
      <p>
        <strong>Price:</strong> Starting at $250.
      </p>
      <button className="btn-primary">Book Now</button>
    </div>
  );
};

export default MoveOutCleaning;