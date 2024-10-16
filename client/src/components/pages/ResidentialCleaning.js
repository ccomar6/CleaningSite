import React from 'react';
import '../styling/ServiceDetails.css';

const ResidentialCleaning = () => {
  return (
    <div className="service-details-container">
      <h1>Residential Cleaning</h1>
      <p>
        Our trusted residential cleaning service ensures your home is spotless, healthy, and safe. Whether it's regular cleaning or deep cleaning, we've got you covered.
      </p>
      <ul>
        <li>Dusting and polishing furniture</li>
        <li>Cleaning floors and carpets</li>
        <li>Sanitizing bathrooms and kitchens</li>
        <li>Window cleaning</li>
      </ul>
      <p>
        <strong>Price:</strong> Starting at $100.
      </p>
      <button className="btn-primary">Book Now</button>
    </div>
  );
};

export default ResidentialCleaning;