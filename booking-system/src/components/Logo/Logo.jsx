"use client";
import { useEffect, useState } from 'react';
import './Logo.css';
import LogoImage from '../../assets/images/LoagoL.png';
import LogoImage2 from '../../assets/images/LoagoL2.png';
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000); // Delay for sliding effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <BackgroundBeamsWithCollision className="BackgroundBeamsWithCollision">
      <div className={`app-container ${isLoaded ? 'open' : ''}`}>

        <div className="logo-container">
          <div className="logo-container2">
            <span></span>
            <img src={LogoImage} className="logo" alt="Logo" />
            <div className="shine-effect"></div>
          </div>
          <img
            src={LogoImage2}
            className={`animated-logo ${isLoaded ? 'fade-in' : ''}`}
            alt="Animated Logo"
          />
        </div>
        <div className="white-BD">
          <div className="left-section"></div>
          <div className="right-section"></div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Logo;
