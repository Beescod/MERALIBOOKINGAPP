import React, { useState, useRef, useEffect } from "react";
import './Cards.css';
import hairdressing from '../../assets/images/Hairdressing.jpg';
import massages from '../../assets/images/Massages.jpg';
import Nailservices from '../../assets/images/Nail-services.jpeg';
import Facialtreatments from '../../assets/images/Facial-treatments.jpg';
import Maderotherapy from '../../assets/images/Maderotherapy.jpg';
import Aesthetics from '../../assets/images/Aesthetics.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import ProductsBD from "../../assets/images/ProductsBD.jpg";

const services = [
  { id: 1, title: "Hairdressing", image: hairdressing },
  { id: 2, title: "Massages", image: massages },
  { id: 3, title: "Nail Services", image: Nailservices },
  { id: 4, title: "Facial Treatments", image: Facialtreatments },
  { id: 5, title: "Maderotherapy", image: Maderotherapy },
  { id: 6, title: "Aesthetics", image: Aesthetics },
];

const Salon = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,   // Animation duration in ms
      offset: 200,      // Trigger animation closer to the viewport
      easing: 'ease-in-out', // Smooth animation
      once: true,      // Animation happens only once
    });
  }, []);
  
  return (
    <section>
      <div>
        <div className="text-overlay-header">
          <h1 className="text-overlay-title1" data-aos="fade-in">Booking a treatment</h1>
          <button className="discover-button-header">Vérifier les disponibilités</button>
        </div>
      </div>
      <div className="salon-container">
        {services.map((service) => (
          <div key={service.id} className="image-container1">
            <img src={service.image} className="salon-image" alt={service.title} />
            <div className="text-overlay">
              <h1 className="text-overlay-title" data-aos="fade-in">{service.title}</h1>
              <button className="discover-button">DÉCOUVRIR</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Salon;
