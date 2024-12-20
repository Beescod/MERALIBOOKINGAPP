import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import LoagoL from "../../assets/images/BDLogo.png";
import playIcon from "../../assets/images/play_icon.png";
import pauseIcon from "../../assets/images/pause_icon.png";
import volumeup from "../../assets/images/volumeup.png";
import volumedown from "../../assets/images/volumedown.png";
import backgroundImage from "../../assets/images/spa-section.png";
import Herovideo from "../../assets/images/Herovideo.mp4";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isVolumeUp, setIsVolumeUp] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlayPauseClick = () => {
    setIsPlaying((prev) => !prev);
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleVolume = () => {
    if (videoRef.current) {
      const newVolume = isVolumeUp ? 0 : 1;
      setIsVolumeUp(!isVolumeUp);
      videoRef.current.volume = newVolume;
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        {isPlaying ? (
          <video
            ref={videoRef}
            onPlay={() => console.log("Video started playing")}
            onPause={() => console.log("Video paused")}
            className="hero-background-video"
            src={Herovideo}
            autoPlay
            loop
            muted={!isVolumeUp}
            onClick={handleVideoClick}
            style={{ display: isPlaying ? "block" : "none" }}
            controls={false}
            playsInline
          />
        ) : (
          <img
            className="hero-background-image"
            src={backgroundImage}
            alt="Background"
            style={{ display: isPlaying ? "none" : "block" }}
            onClick={handleVideoClick}
          />
        )}
      </div>
      <div className={`content-overlay ${isPlaying ? "fade-in" : ""}`} onClick={handleVideoClick}>
        {isPlaying ? (
          <div className="video-content">
            <button className="Pause-toggle-button">
              <img
                src={pauseIcon}
                alt="Pause"
                className="button-icon"
              />
            </button>
            <button className="volume-control-button" onClick={toggleVolume}>
              <img
                src={isVolumeUp ? volumeup : volumedown}
                alt={isVolumeUp ? "Volume Up" : "Volume Down"}
                className="volume-icon"
              />
            </button>
          </div>
        ) : (
          <div className="image-content">
            <div className="spa-section-in">
              <div className={`spa-section-logo ${isScrolled ? "hidden1" : "visible"}`}>
                <a href="/">
                  <img src={LoagoL} alt="Dynamic" width={300} height={150} />
                </a>
              </div>
              <button className="play-toggle-button" onClick={handlePlayPauseClick}>
                <img
                  src={playIcon} 
                  className="button-icon"
                />
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
