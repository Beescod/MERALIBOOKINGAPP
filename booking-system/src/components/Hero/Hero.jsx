import { useState, useEffect } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/BDLogo.png";
import playIcon from "../../assets/images/play_icon.png";
import pauseIcon from "../../assets/images/pause_icon.png";
import backgroundImage from "../../assets/images/spa-section.jpg";
import Herovideo from "../../assets/images/Herovideo.mp4";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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


  const handlePlayPauseClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        {isPlaying ? (
          <video
            className="background-video"
            src={Herovideo}
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            className="background-image"
            src={backgroundImage}
            alt="Background"
          />
        )}
      </div>
      <div className="content-overlay">
        {isPlaying ? (
          <div className="video-content">
            <h1>Relax & Rejuvenate</h1>
            <button className="toggle-button" onClick={handlePlayPauseClick}>
          <img
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? "Pause" : "Play"}
            className="button-icon"
          />
        </button>
            <p>Experience the ultimate spa treatment with us.</p>
          </div>
        ) : (
          <div className="image-content">
            <div className="spa-section-in">
              <div className={`spa-section-logo ${isScrolled ? "hidden1" : "visible"}`}>
                <a href="/">
                  <img src={LoagoL} alt="Dynamic" width={300} height={150} />
                </a>
              </div>
              <button className="toggle-button" onClick={handlePlayPauseClick}>
                <img
                  src={isPlaying ? pauseIcon : playIcon}
                  className="button-icon"
                />
              </button>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;