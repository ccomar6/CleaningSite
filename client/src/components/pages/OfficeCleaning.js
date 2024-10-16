import React from 'react';
import '../styling/ServiceDetails.css';

const OfficeCleaning = () => {
  return (
    <div className="service-details-container">
      <h1>Office Cleaning</h1>
      <p>
        Maintain a clean and professional environment for your employees and clients with our reliable office cleaning services.
      </p>
      <ul>
        <li>Daily office cleaning</li>
        <li>Restroom sanitation</li>
        <li>Breakroom/kitchen cleaning</li>
        <li>Carpet and floor cleaning</li>
      </ul>
      <p>
        <strong>Price:</strong> Starting at $150 per visit.
      </p>
      <button className="btn-primary">Book Now</button>
    </div>
  );
};

export default OfficeCleaning;