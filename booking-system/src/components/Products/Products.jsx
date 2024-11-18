import React from "react";
import Img1 from "../../assets/images/spa-section.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import LoagoL from "../../assets/images/BDLogo.png";
import { FaStar } from "react-icons/fa6";
import "./Products.css";


const Products = () => {
  return (
    <div className="spa-products-container">
      <div className="products-header">
        <p data-aos="fade-up" className="products-subtitle">
          Relax in the best spa hotel in Marrakech
        </p>
      </div>
      <div className="spa-container">
        <div className="spa-image">
          <img src={Img1} alt="Spa of La Mamounia" />
          <div className="shine-effect"></div>
        </div>
        <div className="spa-description">
        <a href="/">
              <img src={LoagoL} alt="Dynamic" width={300} height={150} />
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
