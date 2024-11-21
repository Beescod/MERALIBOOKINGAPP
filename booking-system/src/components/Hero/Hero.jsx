import { useState, useEffect } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/BDLogo.png";
import playIcon from "../../assets/images/play_icon.png";
import pauseIcon from "../../assets/images/pause_icon.png";
import Herovideo from "../../assets/images/Herovideo.mp4";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playStatus, setplayStatus] = useState(false);


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

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  return (

<div>
  <background playStatus={playStatus}  hero/>














    <div className="selection">
      <section className={`spa-section ${isPlaying ? "playing" : ""}`}>
        <div className="spa-section-in">
          
          <div className="video-container">
            {isPlaying && (
              <video
                className="background-video"
                src={Herovideo}
                autoPlay
                loop
                muted
              />
            )}
            {isPlaying && (
              <img
                src={pauseIcon}
                alt="Pause video"
                className="video-pause-icon"
                onClick={handlePauseClick}
              />
            )}
          </div>

          <div className={`spa-section-logo ${isScrolled || isPlaying ? "hidden1" : "visible"}`}>

            <a href="/">
              <img src={LoagoL} alt="Dynamic" width={300} height={150} />
            </a>
          </div>
          <div className="play-video">
            {!isPlaying ? (
              <img
                src={playIcon}
                alt="playIcon"
                width={50}
                height={50}
                onClick={handlePlayClick}
                className="play-button"
              />
            ) : (
              <img
                src={pauseIcon}
                alt="pauseIcon"
                width={50}
                height={50}
                onClick={handlePauseClick}
                className="pause-button"
                style={{ position: "absolute", bottom: "20px", left: "20px" }}
              />
            )}
          </div>
          {!isPlaying && (
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
          )}
        </div>
      </section>
    </div>
    </div>
  );
};

export default Hero;
