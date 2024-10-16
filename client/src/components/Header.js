import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styling/Header.css';

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    navigate('/');
    window.location.reload(); // Reload to reset the login state
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the dropdown menu
  };

  return (
    <header className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className="logo">
        <Link to="/">Cleaning Co.</Link>
      </div>
      <nav>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/schedule-now">Schedule Now</Link></li> 
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="services-menu">
            <Link to="/services">Services</Link>
            <ul className="dropdown-menu">
              <li><Link to="/residential-cleaning">Residential Cleaning</Link></li>
              <li><Link to="/office-cleaning">Office Cleaning</Link></li>
              <li><Link to="/deep-cleaning">Deep Cleaning</Link></li>
              <li><Link to="/move-out-cleaning">Move-In/Move-Out Cleaning</Link></li>
            </ul>
          </li>
          <li><Link to="/apply-now">Apply Now</Link></li>
          {!isLoggedIn ? (
            <li><Link to="/login">Login/Sign Up</Link></li>
          ) : (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout} className="btn-secondary">Log Out</button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;