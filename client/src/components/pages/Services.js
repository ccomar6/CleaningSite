import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Services.css';

const Services = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  // Function to handle the button click
  const handleBookCleaning = () => {
    if (isLoggedIn) {
      navigate('/schedule');
    } else {
      navigate('/sign-up');
    }
  };

  return (
    <div className="services-page-container">
      {/* Services Overview */}
      <section className="services-overview">
        <h1>Our Cleaning Services</h1>
        <p>We offer a variety of cleaning services to meet your needs, whether for your home, office, or a move-in/move-out cleaning. We’ve got you covered!</p>
      </section>

      {/* Service Categories - Horizontal Layout */}
      <section className="services-horizontal">
        <div className="service-item">
          <img src="path_to_image" alt="Residential Cleaning" className="service-image" />
          <div className="service-text">
            <h2>Residential Cleaning</h2>
            <p>Keep your home spotless with our trusted residential cleaning service. From regular cleaning to deep cleaning, we’ve got you covered.</p>
            <Link to="/residential-cleaning" className="btn-primary">Learn More</Link>
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-text">
            <h2>Office Cleaning</h2>
            <p>Maintain a clean and professional environment for your employees and clients. Our office cleaning services ensure your workspace is always presentable.</p>
            <Link to="/office-cleaning" className="btn-primary">Learn More</Link>
          </div>
          <img src="path_to_image" alt="Office Cleaning" className="service-image" />
        </div>

        <div className="service-item">
          <img src="path_to_image" alt="Deep Cleaning" className="service-image" />
          <div className="service-text">
            <h2>Deep Cleaning</h2>
            <p>For those hard-to-reach areas, our deep cleaning service guarantees your space will be thoroughly cleaned from top to bottom.</p>
            <Link to="/deep-cleaning" className="btn-primary">Learn More</Link>
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-text">
            <h2>Move-In/Move-Out Cleaning</h2>
            <p>Make your move stress-free with our move-in/move-out cleaning services. We’ll ensure your new or former home is ready for your next step.</p>
            <Link to="/move-cleaning" className="btn-primary">Learn More</Link>
          </div>
          <img src="path_to_image" alt="Move-In/Move-Out Cleaning" className="service-image" />
        </div>
      </section>

      {/* Call to Action Section - Schedule a Cleaning */}
      <section className="cta-schedule-section">
        <h2>Ready to Book a Cleaning?</h2>
        <p>Click below to schedule your cleaning service. We’ll make sure your space is sparkling clean in no time!</p>
        <button className="btn-primary" onClick={handleBookCleaning}>Schedule a Cleaning</button>
      </section>

      {/* Still have questions? section */}
      <section className="questions-section">
        <h2>Still have further questions?</h2>
        <p>If you have any questions or need more details about our services, feel free to contact us.</p>
        <Link to="/contact" className="btn-secondary">Contact Us</Link>
      </section>
    </div>
  );
};

export default Services;