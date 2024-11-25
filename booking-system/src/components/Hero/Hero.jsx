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
  const [isScrolled, setIsScrolled] = useState(false);
  const [volume, setVolume] = useState(0.5);
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

  const handleVolumeUp = () => {
    if (videoRef.current) {
      const newVolume = Math.min(volume + 0.5, 1); // Increment volume, max 1.0
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
    }
  };

  const handleVolumeDown = () => {
    if (videoRef.current) {
      const newVolume = Math.max(volume - 0.5, 0); // Decrement volume, min 0.0
      setVolume(newVolume);
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
            muted={!isPlaying} // Mute when not playing
            style={{ display: isPlaying ? "block" : "none" }}
          />
        ) : (
          <img
            className="hero-background-image"
            src={backgroundImage}
            alt="Background"
            style={{ display: isPlaying ? "none" : "block" }}
          />
        )}
      </div>
      <div className="content-overlay">
        {isPlaying ? (
          <div className="video-content">
            <button className="Pause-toggle-button" onClick={handlePlayPauseClick}>
              <img
                src={isPlaying ? pauseIcon : playIcon}
                alt={isPlaying ? "Pause" : "Play"}
                className="button-icon"
              />
            </button>  
            <button className="volume-control-button" onClick={handleVolumeUp}>
            <img src={volumeup} alt="Volume Up" className="Pause-toggle-butto" />
          </button>
          <button className="volume-control-button" onClick={handleVolumeDown}>
            <img src={volumedown} alt="Volume Down" className="Pause-toggle-button" />
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
                  src={isPlaying ? pauseIcon : playIcon}
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