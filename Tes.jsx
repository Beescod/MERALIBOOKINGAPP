import React from 'react';
import './brands.css'; // Link to the CSS file
import LogoImage from "../../assets/images/spa-section.jpg";
import RightImage from "../../assets//images/product.jpg";

const BrandsSection = () => {
  return (
    <div>
      <div className="brands-section1">
        {/* Text Content */}
        <div className="brands-text">
          <div className="brands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="brands-title">The brands of the spa</h1>
          <p className="brands-description">
            The prestigious brands Valmont, Augustinus Bader, and MarocMaroc offer
            the best of their expertise for targeted care that combines cutting-edge
            scientific research and sweet sensoryism.
          </p>
          <p className="brands-description">
            Complementing this experience of total well-being, our team of
            hairdressers, beauticians, barbers, and nail-artists bring their
            precious know-how for last perfection touches.
          </p>
        </div>

        {/* Image Content */}
        <div className="brands-image">
          <img src={RightImage} alt="Spa Products" />
        </div>
      </div>
      <div className="brands-section2">
        {/* Text Content */}
        <div className="brands-text">
          <div className="brands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="brands-title">The brands of the spa</h1>
          <nav className="spa-nav">
            <a href="#hammams" className="brands-section-brands-section-text-style001">
              <span className="icon">◆</span> The Hammams
            </a>
            <a href="#treatments" className="brands-section-text-style001">
              <span className="icon">◆</span> The Treatments
            </a>
            <a href="#salon" className="brands-section-text-style001">
              <span className="icon">◆</span> The Hairdressing Salon
            </a>
            <a href="#sports" className="brands-section-text-style001">
              <span className="icon">◆</span> The Sports
            </a>
            <a href="#sports" className="brands-section-text-style001">
              <span className="icon">◆</span> The Sports
            </a>
            <a href="#sports" className="brands-section-text-style001">
              <span className="icon">◆</span> The Sports
            </a>
          </nav>
        </div>

        {/* Image Content */}
        <div className="brands-image">
          <img src={RightImage} alt="Spa Products" />
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;




import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";
import "./brands.css"; // Link to the CSS file
import LogoImage from "../../assets/images/spa-section.jpg";
import RightImage from "../../assets/images/product.jpg";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="targetRef">
      <div className="targetRef-sticky sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div>
      <div className="brands-section1">
        {/* Text Content */}
        <div className="brands-text">
          <div className="brands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="brands-title">The brands of the spa</h1>
          <p className="brands-description">
            The prestigious brands Valmont, Augustinus Bader, and MarocMaroc offer
            the best of their expertise for targeted care that combines cutting-edge
            scientific research and sweet sensoryism.
          </p>
          <p className="brands-description">
            Complementing this experience of total well-being, our team of
            hairdressers, beauticians, barbers, and nail-artists bring their
            precious know-how for last perfection touches.
          </p>
        </div>

        {/* Image Content */}
        <div className="brands-image">
          <img src={RightImage} alt="Spa Products" />
        </div>
      </div>

      <div className="brands-section2">
        {/* Text Content */}
        <div className="brands-text">
          <div className="brands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="brands-title">The brands of the spa</h1>
          <nav className="spa-nav">
            <a href="#hammams" className="brands-section-text-style001">
              <span className="icon">◆</span> The Hammams
            </a>
            <a href="#treatments" className="brands-section-text-style001">
              <span className="icon">◆</span> The Treatments
            </a>
            <a href="#salon" className="brands-section-text-style001">
              <span className="icon">◆</span> The Hairdressing Salon
            </a>
            <a href="#sports" className="brands-section-text-style001">
              <span className="icon">◆</span> The Sports
            </a>
          </nav>
        </div>

        {/* Image Content */}
        <div className="brands-image">
          <img src={RightImage} alt="Spa Products" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "../../assets/images/product.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
];
