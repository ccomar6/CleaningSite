import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/About.css';

const About = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  // Function to handle booking appointment
  const handleBookAppointment = () => {
    if (isLoggedIn) {
      navigate('/schedule'); // If logged in, go to the schedule page
    } else {
      navigate('/sign-up'); // If not logged in, go to the sign-up page
    }
  };

  // Function to navigate to the services page
  const handleLearnMore = () => {
    navigate('/services'); // Navigate to the services page
  };

  return (
    <div className="about-container">
      {/* Company Overview */}
      <section className="about-section">
        <h1>About Us</h1>
        <p>Welcome to Cleaning Co., your trusted cleaning service provider. With over a decade of experience, we offer top-notch residential, office, and deep cleaning services to make your home or office shine. Our team of professionals is committed to delivering exceptional results using eco-friendly products and the latest cleaning techniques.</p>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is simple: to provide reliable, efficient, and eco-friendly cleaning solutions that exceed customer expectations. We take pride in our attention to detail and personalized service, ensuring that every client is satisfied with our work.</p>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <ul>
          <li>Reliability: We show up on time and complete the job as promised.</li>
          <li>Eco-Friendly: We use environmentally safe products that protect your health and the planet.</li>
          <li>Customer Satisfaction: We strive to exceed your expectations with every cleaning.</li>
          <li>Flexibility: We offer services that fit your schedule and needs.</li>
        </ul>
      </section>

      {/* Meet the Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our team of experienced professionals is dedicated to making your space shine. Every team member undergoes rigorous training to ensure high-quality standards are met.</p>

        {/* Image placeholders for staff */}
        <div className="team-images">
          <div className="team-member">
            <img src="path_to_image_placeholder" alt="Team Member 1" className="team-photo" />
            <p>Staff Member 1</p>
          </div>
          <div className="team-member">
            <img src="path_to_image_placeholder" alt="Team Member 2" className="team-photo" />
            <p>Staff Member 2</p>
          </div>
          <div className="team-member">
            <img src="path_to_image_placeholder" alt="Team Member 3" className="team-photo" />
            <p>Staff Member 3</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <blockquote>"Cleaning Co. has been keeping our office spotless for years. We love their professionalism and attention to detail!"</blockquote>
        <p>- John Smith, Office Manager</p>

        <blockquote>"They did an amazing job with our deep cleaning. Highly recommend them for any cleaning needs!"</blockquote>
        <p>- Jane Doe, Homeowner</p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <button className="btn-primary" onClick={handleBookAppointment}>
          Book a Cleaning Today
        </button>
        <button className="btn-secondary" onClick={handleLearnMore}>
          Learn More About Our Services
        </button>
      </section>
    </div>
  );
};

export default About;