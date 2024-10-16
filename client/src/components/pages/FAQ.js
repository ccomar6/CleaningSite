import React, { useState } from 'react';
import '../styling/FAQ.css'; // Import the FAQ.css file for styling

const FAQ = () => {
  // State to track which question is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the answer visibility
  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if it's already open
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2 onClick={() => toggleAnswer(0)} className="faq-question">
          What services do you offer?
        </h2>
        {expandedIndex === 0 && (
          <p className="faq-answer">
            We offer a range of cleaning services including residential cleaning, office cleaning, and deep cleaning.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 onClick={() => toggleAnswer(1)} className="faq-question">
          How do I book an appointment?
        </h2>
        {expandedIndex === 1 && (
          <p className="faq-answer">
            You can easily book an appointment through our online booking system. Simply go to the 'Schedule' page, select a service, choose a time slot, and confirm your booking.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 onClick={() => toggleAnswer(2)} className="faq-question">
          Do I need to be home during the cleaning?
        </h2>
        {expandedIndex === 2 && (
          <p className="faq-answer">
            No, you don't need to be home. As long as we have access to the property, we can perform the cleaning.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 onClick={() => toggleAnswer(3)} className="faq-question">
          What cleaning products do you use?
        </h2>
        {expandedIndex === 3 && (
          <p className="faq-answer">
            We use eco-friendly and non-toxic cleaning products that are safe for your family and pets.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 onClick={() => toggleAnswer(4)} className="faq-question">
          What is your cancellation policy?
        </h2>
        {expandedIndex === 4 && (
          <p className="faq-answer">
            You can cancel or reschedule your appointment up to 24 hours before the scheduled time. A cancellation fee may apply if less notice is given.
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;