import React from 'react';
import { Link } from 'react-router-dom';
import './styling/Footer.css'; // Import your CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/login">Login/Account</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/apply-now">Apply Now</Link></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@cleaningservice.com</p>
        <p>Address: 123 Clean Street, Clean City, CL 12345</p>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Cleaning Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;