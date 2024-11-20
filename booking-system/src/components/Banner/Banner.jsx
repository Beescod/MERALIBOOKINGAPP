import React from "react";
import "./Banner.css"; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets/images/product2.jpg";
import ProductsBD from "../../assets/images/product2.jpg";

const BrandsSection = () => {
  return (
    <div
      className="brands-wrapper9"
      style={{
        backgroundColor: "black", // Set background to black
        // backgroundImage: `url(${ProductsBD})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <section className="brands-container9">
        {/* Logo */}
        <div className="brands-logo9">
          <img src={LogoImage} alt="Logo" />
          <h1 className="brands-title9">The brands of the spa</h1>
        </div>

        {/* Brands Text & Image */}
        <div className="brands-content9">
          <div className="brands-text">
            <p className="brands-description9">
              The prestigious brands Valmont, Augustinus Bader, and MarocMaroc offer
              the best of their expertise for targeted care that combines cutting-edge
              scientific research and sweet sensoryism.
            </p>
            <p className="brands-description9">
              Complementing this experience of total well-being, our team of
              hairdressers, beauticians, barbers, and nail-artists bring their
              precious know-how for last perfection touches.
            </p>
          </div>

          {/* Overlay Image */}
          <div className="brands-image9">
            <img src={RightImage} alt="Spa Products" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsSection;
