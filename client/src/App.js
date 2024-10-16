import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ScheduleNow from './components/pages/ScheduleNow'; // Updated to import ScheduleNow
import Login from './components/pages/Login';
import FAQ from './components/pages/FAQ';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import ApplyNow from './components/pages/ApplyNow';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Checkout from './components/pages/Checkout';
import Footer from './components/Footer';
import AppointmentList from './components/AppointmentList';
import OfficeCleaning from './components/pages/OfficeCleaning';
import DeepCleaning from './components/pages/DeepCleaning';
import MoveOutCleaning from './components/pages/MoveOutCleaning';
import ResidentialCleaning from './components/pages/ResidentialCleaning'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setIsLoggedIn(true);
      setUserProfile(storedProfile);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = (profileData) => {
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    setUserProfile(profileData);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
            {/* This is where the updated route goes */}
            <Route path="/schedule-now" element={<ScheduleNow isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/sign-up" element={<SignUp onSignUp={handleSignUp} />} />
            <Route path="/profile" element={<Profile userProfile={userProfile} />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Individual service pages */}
            <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
            <Route path="/office-cleaning" element={<OfficeCleaning />} />
            <Route path="/deep-cleaning" element={<DeepCleaning />} />
            <Route path="/move-out-cleaning" element={<MoveOutCleaning />} />
          </Routes>

          {isLoggedIn && (
            <div className="appointments-wrapper">
              <AppointmentList />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;