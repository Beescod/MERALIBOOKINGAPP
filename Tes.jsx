import React from "react";
import Img1 from "../../assets/images/spa-section.jpg";
import LogoImage from '../../assets/images/LoagoL.png';
import "./Products.css";

const Products = () => {
  return (
    <div className="spa-products-container">
      <div className="products-header">
        <p data-aos="fade-up" className="products-subtitle">
          Relax in the best spa in Marrakech
        </p>
      </div>
      <div className="spa-container">
        <div className="spa-container-image">
          <img src={Img1} alt="Spa of La Mamounia" />
          <div className="shine-effect"></div>
        </div>
        <div className="spa-description" data-aos="fade-up">
          <a>
            <img src={LogoImage} alt="Dynamic" width={300} height={150} />
          </a>
          <h1>Dreaming, relaxing: beauty and well-being at the spa of La Mamounia</h1>
          <p>
            Spread over 2,500 m², the spa of La Mamounia is an extraordinary experience to live in its sumptuous setting of the Thousand and One Nights.
          </p>
          <p>
            If everything in La Mamounia, by the beauty of the place, the harmony and the sweetness that reign there, incites to enjoy every moment, the spa is the place where time can...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
