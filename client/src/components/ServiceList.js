import React from "react";
import { services } from "../mockData";  

const ServiceList = () => {
  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - ${service.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;