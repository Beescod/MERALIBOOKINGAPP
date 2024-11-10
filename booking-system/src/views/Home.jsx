import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import MobileBooking from '../components/MobileBooking';
import Laser from '../assets/images/Laser.jpg';
import LoagoL from '../assets/images/BDLogo.png';
// import Spabd from '../assets/images/spa-section.jpg';

const Home = () => {

  
  return (
    <>
      <div className="selection">

        <Navbar />
        <section className="spa-section">
          {/* <Image src={Spabd} alt="Dynamic" layout="intrinsic" width={400} height={200} priority={true} /> */}

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
              <a href="#salon">The Hairdressing Salon</a>
              <a href="#sports">The Sports</a>
            </nav>
          </div>

        </section>
        <section className="mamounia-section">
          <div className="mamounia-image">
            <img src={Laser} alt="Dynamic" width={400} />
          </div>
          <div className="mamounia-content">
            <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
            <p>
              <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
            </p>
            <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
          </div>
        </section>
        <section className="mamounia-section">
          <div className="mamounia-image">
            <img src={Laser} alt="Dynamic" width={400} />
          </div>
          <div className="mamounia-content">
            <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
            <p>
              <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
            </p>
            <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
          </div>
        </section>
        <section className="mamounia-section">
          <div className="mamounia-image">
            <img src={Laser} alt="Dynamic" width={400} />
          </div>
          <div className="mamounia-content">
            <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
            <p>
              <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
            </p>
            <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
          </div>
        </section>
        <section className="mamounia-section">
          <div className="mamounia-image">
            <img src={Laser} alt="Dynamic" width={400} />
          </div>
          <div className="mamounia-content">
            <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
            <p>
              <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
            </p>
            <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
          </div>
        </section>
        <section className="mamounia-section">
          <div className="mamounia-image">
            <img src={Laser} alt="Dynamic" width={400} />
          </div>
          <div className="mamounia-content">
            <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
            <p>
              <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
            </p>
            <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
          </div>
        </section>
        <MobileBooking />
      </div>
    </>
  );
};

export default Home;
