import { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import MobileBooking from '../components/MobileBooking';
import Laser from '../assets/images/Laser.jpg';
import LoagoL from '../assets/images/BDLogo.png';

const Home = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log("Current scroll position:", scrollPosition); // Logs the scroll position

        const scrollBackground = document.querySelector(".scroll-background");
        if (scrollPosition > 100) { // Adjust scroll threshold as needed
          setShowBackground(true);
          console.log("Showing background"); // Log when the background should show
        } else {
          setShowBackground(false);
          console.log("Hiding background"); // Log when the background should hide
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="selection">
        {showBackground && <div className="scroll-background" />}
        <section className="spa-section">
          <div className="spa-section-in">
            <div className="spa-section-logo">
              <a href="/">
                <img src={LoagoL} alt="Dynamic" width={400} height={200} />
              </a>
            </div>
            <h2>The Spa & Wellbeing</h2>
            <div className="divider"></div>
            <nav className="spa-nav">
              <a href="#massages">The Massages</a>
              <a href="#hammams">The Hammams</a>
              <a href="#treatments">The Treatments</a>
              <a href="#salon">The Salon</a>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
