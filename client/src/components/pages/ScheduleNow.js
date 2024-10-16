import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting
import '../styling/ScheduleNow.css'; // Rename and adjust the CSS accordingly

const ScheduleNow = ({ isLoggedIn }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const availableTimeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
  ];

  const handleSchedule = () => {
    const scheduleInfo = {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      service: selectedService
    };

    localStorage.setItem('scheduleInfo', JSON.stringify(scheduleInfo));

    if (!isLoggedIn) {
      navigate('/login'); // If not logged in, redirect to login
    } else {
      navigate('/checkout'); // Otherwise, proceed to checkout
    }
  };

  return (
    <div className="schedule-container">
      <h1>Schedule a Cleaning Service</h1>

      <div className="schedule-form">
        <label>Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="schedule-input"
        />

        <label>Time Slot:</label>
        <select
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
          className="schedule-input"
        >
          <option value="">Select a time slot</option>
          {availableTimeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <label>Service:</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="schedule-input"
        >
          <option value="">Select a service</option>
          <option value="Residential Cleaning">Residential Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
        </select>

        <button onClick={handleSchedule} className="btn-primary">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default ScheduleNow;