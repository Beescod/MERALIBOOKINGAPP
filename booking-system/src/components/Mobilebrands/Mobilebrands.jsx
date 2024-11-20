import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import './Mobilebrands.css'; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets/images/productcopy.jpg";
import LefttImage from "../../assets/images/product2.jpg";

const Mobilebrands = () => {
  return (
    <div className="mobilebrands">
      <div className="mobilebrands-section1">
        <div className="mobilebrands-text">
          <div className="mobilebrands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="mobilebrands-title">Les marques du spa</h1>
          <p className="mobilebrands-description1">
            Les prestigieuses marques Valmont, Augustinus Bader et marocMaroc offrent ici le meilleur de leur expertise pour des soins ciblés qui conjuguent recherche scientifique de pointe et douce sensorialité.
          </p>
          <p className="mobilebrands-description2">
            Complementing this experience of total well-being, our team of hairdressers, beauticians, barbers, and nail-artists bring their precious know-how for last perfection touches.
          </p>
        </div>
        <div className="mobilebrands-image">
          <img src={RightImage} alt="Spa Products" />
        </div>
      </div>

      <div className="mobilebrands-section2">
        <div className="mobilebrands-text">
          <div className="mobilebrands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="mobilebrands-title">Les équipements du spa</h1>
          <nav className="mobilebrands-nav">
            <a href="#hammams" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon">◆</span> 2 hammams traditionnels & 1 hammam privé
            </a>
            <a href="#treatments" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon">◆</span> 10 cabines multi-traitements (dont 2 duos)
            </a>
            <a href="#salon" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon">◆</span> Salle de relaxation avec service de restauration
            </a>
            <a href="#sports" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon">◆</span> Barbier et salon de coiffure
            </a>
            <a href="#sports" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon">◆</span> Onglerie
            </a>
            <a href="#sports" className="mobilebrands-nav-item">
              <span className="mobilebrands-icon">◆</span> The Sports
            </a>
          </nav>
        </div>
        <div className="mobilebrands-image">
          <img src={LefttImage} alt="Spa Products" />
        </div>
      </div>
    </div>
  );
};

export default Mobilebrands;
