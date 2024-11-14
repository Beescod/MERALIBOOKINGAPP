import React, { useState, useEffect } from 'react';
import Image from "next/image";
import '../app/assets/css/Home.css';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 90;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="selection">
        {/* Your sections go here */}
        <section className="spa-section">
          <div className="spa-section-in">
            <div className="spa-section-logo">
              <a href="/">
                {/* <img src={Logo} alt="Dynamic" width={400} height={200} /> */}
              </a>
            </div>
            <h2>The Spa & Wellbeing</h2>
            <div className="divider"></div>
            <nav className="spa-nav">
              <a href="#massages">The Massages</a>
              <a href="#hammams">The Hammams</a>
              <a href="#treatments">The Treatments</a>
              <a href="#salon">The Hairdressing Salon</a>
              <a href="#sports">The Sports</a>
            </nav>
          </div>
        </section>

        {/* Other sections go here */}
      </div>
    </div>
  );
}
