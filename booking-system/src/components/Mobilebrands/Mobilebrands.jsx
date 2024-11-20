import React, { useState, useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPlusCircle } from "react-icons/fa";
import './Mobilebrands.css'; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets/images/productcopy.jpg";
import LefttImage from "../../assets/images/product2.jpg";

const Mobilebrands = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,   // Animation duration in ms
      offset: 200,      // Trigger animation closer to the viewport
      easing: 'ease-in-out', // Smooth animation
      once: true,      // Animation happens only once
    });
  }, []);
  return (
    <div className="mobilebrands">
      <div className="mobilebrands-section1">
        <div className="mobilebrands-text">
          <div className="mobilebrands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="mobilebrands-title" data-aos="fade-in">Les marques du spa</h1>
          <p className="mobilebrands-description1" data-aos="fade-in">
            Les prestigieuses marques Valmont, Augustinus Bader et marocMaroc offrent ici le meilleur de leur expertise pour des soins ciblés qui conjuguent recherche scientifique de pointe et douce sensorialité.
          </p>
          <p className="mobilebrands-description2" data-aos="fade-in">
            Complementing this experience of total well-being, our team of hairdressers, beauticians, barbers, and nail-artists bring their precious know-how for last perfection touches.
          </p>
        </div>
        <div className="mobilebrands-image">
          <img src={RightImage} alt="Spa Products" />
        </div>
      </div>

      <div className="mobilebrands-section2">
        <div className="mobilebrands-text">
          <div className="mobilebrands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="mobilebrands-title" data-aos="fade-in">Les équipements du spa</h1>
          <nav className="mobilebrands-nav" data-aos="fade-in">
            <a href="#hammams" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon" data-aos="fade-in">◆</span> 2 hammams traditionnels & 1 hammam privé
            </a>
            <a href="#treatments" className="mobilebrands-nav-item" data-aos="fade-in">
              <span className="mobilebrands-icon">◆</span> 10 cabines multi-traitements (dont 2 duos)
            </a>
            <a href="#salon" className="mobilebrands-nav-item" data-aos="fade-in">
              <span className="mobilebrands-icon">◆</span> Salle de relaxation avec service de restauration
            </a>
            <a href="#sports" className="mobilebrands-nav-item" data-aos="fade-in">
              <span className="mobilebrands-icon">◆</span> Barbier et salon de coiffure
            </a>
            <a href="#sports" className="mobilebrands-nav-item" data-aos="fade-in">
              <span className="mobilebrands-icon">◆</span> Onglerie
            </a>
            <a href="#sports" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon" data-aos="fade-in">◆</span> The Sports
            </a>
          </nav>
        </div>
        <div className="mobilebrands-image">
          <img src={LefttImage} alt="Spa Products" />
        </div>
      </div>
    </div>
  );
};

export default Mobilebrands;
