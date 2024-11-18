import React from 'react';
import './Spa.css';
import LogoImage from '../assets/images/LogoImage.jpg'; // Replace with your image path

const Spa = () => {
  return (
    <div className="spa-container">
      <div className="spa-image">
        <img src={LogoImage} alt="Spa of La Mamounia" />
        <div className="shine-effect"></div>
      </div>
      <div className="spa-description">
        <h1>Dreaming, relaxing: beauty and well-being at the spa of La Mamounia</h1>
        <p>
          Spread over 2,500 m², the spa of La Mamounia is an extraordinary experience to live in its sumptuous setting of the Thousand and One Nights.
        </p>
        <p>
          If everything in La Mamounia, by the beauty of the place, the harmony and the sweetness that reign there, incites to enjoy every moment, the spa is the place where time can...
        </p>
      </div>
    </div>
  );
};

export default Spa;
