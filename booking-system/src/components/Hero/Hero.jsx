import { useState, useEffect } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/LoagoL.png";

const Hero = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 90) {
        setIsLogoVisible(false); // Scrolling down hides the logo
      } else {
        setIsLogoVisible(true); // Scrolling up shows the logo
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="selection">
      <section className="spa-section">
        <div className="spa-section-in">
          <div
            className={`spa-section-logo ${isLogoVisible ? "visible" : "hidden"}`}
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
