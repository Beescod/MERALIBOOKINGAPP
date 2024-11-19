import React from 'react';
import './Cards.css';
import hairdressing from '../../assets/images/Hairdressing.jpg';
import massages from '../../assets/images/Massages.jpg';
import Nailservices from '../../assets/images/Nail-services.jpeg';
import Facialtreatments from '../../assets/images/Facial-treatments.jpg';
import Maderotherapy from '../../assets/images/Maderotherapy.jpg';
import Aesthetics from '../../assets/images/Aesthetics.jpg';

const services = [
  { id: 1, title: "Hairdressing", image: hairdressing },
  { id: 2, title: "Massages", image: massages },
  { id: 3, title: "Nail Services", image: Nailservices },
  { id: 4, title: "Facial Treatments", image: Facialtreatments },
  { id: 5, title: "Maderotherapy", image: Maderotherapy },
  { id: 6, title: "Aesthetics", image: Aesthetics },
];

const Salon = () => {
  return (
    <div className="salon-container">
      {services.map((service) => (
        <div key={service.id} className="image-container1">
          <img src={service.image} className="salon-image" alt={service.title} />
          <div className="text-overlay">
            <h1 className="text-overlay-title">{service.title}</h1>
            <button className="discover-button">DÉCOUVRIR</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Salon;
