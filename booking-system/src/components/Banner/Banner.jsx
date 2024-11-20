import React, { useState, useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Banner.css"; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets/images/product2.jpg";
import ProductsBD from "../../assets/images/product2.jpg";


const BrandsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,   // Animation duration in ms
      offset: 200,      // Trigger animation closer to the viewport
      easing: 'ease-in-out', // Smooth animation
      once: true,      // Animation happens only once
    });
  }, []);

  return (
    <div
      className="brands-wrapper9"
      style={{
        backgroundColor: "black", // Set background to black
        // backgroundImage: `url(${ProductsBD})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <section className="brands-container9">
        {/* Logo */}
        <div className="brands-logo9">
          <img src={LogoImage} alt="Logo" />
          <h1 className="brands-title9" data-aos="fade-in">The brands of the spa</h1>
        </div>

        {/* Brands Text & Image */}
        <div className="brands-content9">
          <div className="brands-text">
            <p className="brands-description9" data-aos="fade-in">
              The prestigious brands Valmont, Augustinus Bader, and MarocMaroc offer
              the best of their expertise for targeted care that combines cutting-edge
              scientific research and sweet sensoryism.
            </p>
            <p className="brands-description9" data-aos="fade-in">
              Complementing this experience of total well-being, our team of
              hairdressers, beauticians, barbers, and nail-artists bring their
              precious know-how for last perfection touches.
            </p>
          </div>

          {/* Overlay Image */}
          <div className="brands-image9">
            <img src={RightImage} alt="Spa Products" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsSection;
