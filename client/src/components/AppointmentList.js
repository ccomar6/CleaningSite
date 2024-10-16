import React from "react";
import { appointments } from "../mockData"; 

const AppointmentList = () => {
  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.user} has an appointment for {appointment.service} on {appointment.date}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;