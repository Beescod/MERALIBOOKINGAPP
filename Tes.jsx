import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/BDLogo.png";
import playIcon from "../../assets/images/play_icon.png";
import pauseIcon from "../../assets/images/pause_icon.png";
import volumeup from "../../assets/images/volumeup.png";
import volumedown from "../../assets/images/volumedown.png";
import backgroundImage from "../../assets/images/spa-section.jpg";
import Herovideo from "../../assets/images/Herovideo.mp4";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isVolumeUp, setIsVolumeUp] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPauseClick = () => {
    setIsZooming(true); // Trigger the zoom effect
    setTimeout(() => {
      setIsPlaying(true); // Start playing after zoom
      setIsZooming(false); // Reset zoom state
      videoRef.current?.play();
    }, 1000); // Match the animation duration
  };

  const toggleVolume = () => {
    if (videoRef.current) {
      const newVolume = isVolumeUp ? 0 : 1;
      setIsVolumeUp(!isVolumeUp);
      videoRef.current.volume = newVolume;
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        {isPlaying ? (
          <video
            ref={videoRef}
            className="hero-background-video"
            src={Herovideo}
            autoPlay
            loop
            muted={!isVolumeUp}
          />
        ) : (
          <img
            className="hero-background-image"
            src={backgroundImage}
            alt="Background"
          />
        )}
      </div>
      <div className="content-overlay">
        {!isPlaying && (
          <div className={`spa-section-in ${isZooming ? "zoom-in" : ""}`}>
            <div className="spa-section-logo">
              <a href="/">
                <img src={LoagoL} alt="Dynamic" width={300} height={150} />
              </a>
            </div>
            <button className="play-toggle-button" onClick={handlePlayPauseClick}>
              <img src={playIcon} className="button-icon" alt="Play" />
            </button>
            <div className="thetext">
              <h2 className="TheSpa">Le Centre de Beauté & Bien-être</h2>
              <div className="Heroline"></div>
              <nav className="spa-nav">
                <a href="#hammams" className="text-style001">
                  <span className="icon">◆</span> Les Massages
                </a>
                <a href="#treatments" className="text-style001">
                  <span className="icon">◆</span> La Coiffure
                </a>
                <a href="#salon" className="text-style001">
                  <span className="icon">◆</span> L'Onglerie
                </a>
                <a href="#sports" className="text-style001">
                  <span className="icon">◆</span> Les Soins du Visage
                </a>
                <a href="#sports" className="text-style001">
                  <span className="icon">◆</span> L'Ésthetique
                </a>
                <a href="#sports" className="text-style001">
                  <span className="icon">◆</span> Le Laser
                </a>
              </nav>
            </div>
          </div>
        )}
        {isPlaying && (
          <div className="video-content">
            <button className="Pause-toggle-button" onClick={handlePlayPauseClick}>
              <img src={pauseIcon} alt="Pause" className="button-icon" />
            </button>
            <button className="volume-control-button" onClick={toggleVolume}>
              <img
                src={isVolumeUp ? volumeup : volumedown}
                alt={isVolumeUp ? "Volume Up" : "Volume Down"}
                className="volume-icon"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
