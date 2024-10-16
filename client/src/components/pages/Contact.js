import React, { useState } from 'react';
import '../styling/Contact.css'; // Import Contact.css for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>If you have any questions or need more information, feel free to reach out to us. We’d love to hear from you!</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@cleaningco.com</p>
        <p>Address: 123 Clean Street, Clean City, CL 12345</p>
      </section>
    </div>
  );
};

export default Contact;