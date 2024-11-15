import { useState, useEffect } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/BDLogo.png";

const Hero = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   console.log("Attaching scroll event listener");
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY > 90;
  //     setIsScrolled(scrolled);
  //   };


  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     console.log("Removing scroll event listener");
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <div className="selection">
      <section className="spa-section">
        <div className="spa-section-in">
          <div
            // className={`spa-section-logo ${isScrolled ? "hidden" : ''}`}
            className="spa-section-logo"
          >
            <a href="/">
              <img src={LoagoL} alt="Dynamic" width={400} height={200} />
            </a>
          </div>
          <h2>The Spa & Wellbeing</h2>
          <div className="divider"></div>
          <nav className="spa-nav">
            <a href="#hammams">The Hammams</a>
            <a href="#treatments">The Treatments</a>
            <a href="#salon">The Hairdressing Salon</a>
            <a href="#sports">The Sports</a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Hero;
