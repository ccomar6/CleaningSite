import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styling/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Reliable Cleaning Services at Your Fingertips</h1>
        <p>We provide residential, office, and deep cleaning services. Book a cleaning today!</p>
        
        {/* Replace buttons with Links */}
        <Link to="/schedule" className="btn-primary">Book Now</Link>
        <Link to="/about" className="btn-secondary">Learn More</Link>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Residential Cleaning</h3>
            <p>Keep your home sparkling clean with our professional services.</p>
            <button className="btn-secondary">See Details</button>
          </div>
          <div className="service-item">
            <h3>Office Cleaning</h3>
            <p>Maintain a pristine work environment for your business.</p>
            <button className="btn-secondary">See Details</button>
          </div>
          <div className="service-item">
            <h3>Deep Cleaning</h3>
            <p>Get a thorough cleaning for those hard-to-reach areas.</p>
            <button className="btn-secondary">See Details</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="selling-points">
          <div className="point">Trusted & Insured</div>
          <div className="point">Satisfaction Guaranteed</div>
          <div className="point">Flexible Scheduling</div>
          <div className="point">Eco-Friendly Products</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>"They did an amazing job cleaning my home. Highly recommend!"</blockquote>
        <p>- Jane Doe</p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Link to="/sign-up" className="btn-primary">Sign Up</Link>
        <Link to="/login" className="btn-secondary">Log In</Link>
      </section>
    </div>
  );
};

export default Home;
