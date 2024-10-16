import React, { useState } from 'react';

const ScheduleAppointment = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, service, date });
    // Clear the form after submission
    setName('');
    setService('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule an Appointment</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Service:</label>
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">Select a Service</option>
          <option value="Residential Cleaning">Residential Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Schedule</button>
    </form>
  );
};

export default ScheduleAppointment