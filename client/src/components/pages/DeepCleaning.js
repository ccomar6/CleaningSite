import React from 'react';
import '../styling/ServiceDetails.css';

const DeepCleaning = () => {
  return (
    <div className="service-details-container">
      <h1>Deep Cleaning</h1>
      <p>
        For those hard-to-reach areas, our deep cleaning service guarantees your space will be thoroughly cleaned from top to bottom.
      </p>
      <ul>
        <li>Detailed dusting and polishing</li>
        <li>Deep scrubbing of bathrooms and kitchens</li>
        <li>Baseboard and ceiling fan cleaning</li>
        <li>Window cleaning and more</li>
      </ul>
      <p>
        <strong>Price:</strong> Starting at $200.
      </p>
      <button className="btn-primary">Book Now</button>
    </div>
  );
};

export default DeepCleaning;