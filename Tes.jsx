
import { useState, useEffect } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/BDLogo.png";
import playIcon from "../../assets/images/play_icon.png";
import pauseIcon from "../../assets/images/pause_icon.png";
import Herovideo from "../../assets/images/Herovideo.mp4";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 90;
      setIsScrolled(scrolled);
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
          <div className={`spa-section-logo ${isScrolled ? "hidden1" : "visible"}`}>
            <a href="/">
              <img src={LoagoL} alt="Dynamic" width={300} height={150} />
            </a>
          </div>
          <div className="play-video">
            <img src={playIcon} alt="playIcon" width={50} height={50} /></div>
          <div className="thetext">
            <h2 className="TheSpa">The Spa & Wellbeing</h2>

            <div className="Heroline"></div>

            <nav className="spa-nav">
              <a href="#hammams" className="text-style001">
                <span className="icon">◆</span> The Hammams
              </a>
              <a href="#treatments" className="text-style001">
                <span className="icon">◆</span> The Treatments
              </a>
              <a href="#salon" className="text-style001">
                <span className="icon">◆</span> The Hairdressing Salon
              </a>
              <a href="#sports" className="text-style001">
                <span className="icon">◆</span> The Sports
              </a>
              <a href="#sports" className="text-style001">
                <span className="icon">◆</span> The Sports
              </a>
              <a href="#sports" className="text-style001">
                <span className="icon">◆</span> The Sports
              </a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;






