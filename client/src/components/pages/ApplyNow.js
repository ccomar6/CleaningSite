import React, { useState } from 'react';
import '../styling/ApplyNow.css';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting the form data, such as sending to an API or backend
    console.log(formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="apply-container">
      <h1>Join Our Team</h1>
      <p>We are always looking for dedicated and skilled professionals to join our team. Below are some of the roles we are currently hiring for:</p>

      <ul className="job-roles">
        <li><strong>Residential Cleaner:</strong> Provide top-notch cleaning services for our clients' homes.</li>
        <li><strong>Office Cleaner:</strong> Maintain the cleanliness of various commercial spaces and offices.</li>
        <li><strong>Deep Cleaning Specialist:</strong> Tackle those hard-to-reach areas and ensure a thorough clean.</li>
        <li><strong>Customer Service Representative:</strong> Assist clients with scheduling, inquiries, and other customer-related services.</li>
      </ul>

      <h2>Apply Now</h2>
      <p>Please fill out the form below and attach your resume. We will review your application and get back to you soon.</p>

      <form className="apply-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          required 
        />

        <label>Phone Number:</label>
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleInputChange} 
          required 
        />

        <label>Role You Are Applying For:</label>
        <select 
          name="role" 
          value={formData.role} 
          onChange={handleInputChange} 
          required
        >
          <option value="">Select a role</option>
          <option value="Residential Cleaner">Residential Cleaner</option>
          <option value="Office Cleaner">Office Cleaner</option>
          <option value="Deep Cleaning Specialist">Deep Cleaning Specialist</option>
          <option value="Customer Service Representative">Customer Service Representative</option>
        </select>

        <label>Attach Your Resume:</label>
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} 
          required 
        />

        <button type="submit" className="btn-primary">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyNow;