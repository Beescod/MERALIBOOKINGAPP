import React, { useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";
import './brands.css'; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets/images/product.jpg";
import LefttImage from "../../assets/images/product.jpg";
// import LefttImage from "../../assets/images/Lefttimage.jpg";


const Example = () => {
  return (
    <div className="brands bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
  

  return (
    <section ref={targetRef} className=" brands relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Only apply motion effect if screen width is larger than 768px */}
        <motion.div
          style={{ x }}
          className="flex disable-scroll-for-mobile"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle visibility

  const toggleNav = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div
      key={card.id}
      className="brands group relative h-screen w-screen overflow-hidden bg-neutral-200"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {card.id === 1 ? (
          <div className="brands-section1">
            <div className="brands-text">
              <div className="brands-logo">
                <img src={LogoImage} alt="Logo" />
              </div>
              <h1 className="brands-title">Les marques du spa</h1>
              <p className="brands-description1">
                Les prestigieuses marques Valmont, Augustinus Bader et marocMaroc offrent ici le meilleur de leur expertise pour des soins ciblés qui conjuguent recherche scientifique de pointe et douce sensorialité.
              </p>
              <p className="brands-description2">
                Complementing this experience of total well-being, our team of
                hairdressers, beauticians, barbers, and nail-artists bring their
                precious know-how for last perfection touches.
              </p>
            </div>
            <div className="brands-image">
              <img src={RightImage} alt="Spa Products" />
            </div>
          </div>
        ) : card.id === 2 ? (
          <div className="brands-section2">
            <div className="brands-text">
              <div className="brands-logo">
                <img src={LogoImage} alt="Logo" />
              </div>
              <h1 className="brands-title">Les équipements du spa</h1>
              <nav className="spa-nav1">
                <a href="#hammams" className="brands-section-text-style001">
                  <span className="icon">◆</span> 2 hammams traditionnels & 1 hammam privé
                </a>
                <a href="#treatments" className="brands-section-text-style001">
                  <span className="icon">◆</span> 10 cabines multi-traitements (dont 2 duos)
                </a>
                <a href="#salon" className="brands-section-text-style001">
                  <span className="icon">◆</span> Salle de relaxation avec service de restauration
                </a>
                <a href="#sports" className="brands-section-text-style001">
                  <span className="icon">◆</span> Barbier et salon de coiffure
                </a>
                <a href="#sports" className="brands-section-text-style001">
                  <span className="icon">◆</span> Onglerie
                </a>
                <a href="#sports" className="brands-section-text-style001">
                  <span className="icon">◆</span> The Sports
                </a>

                <motion.nav
                  className="spa-nav12"
                  initial={{ height: 0, opacity: 0 }}
                  animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <a href="#hammams" className="brands-section-text-style001">
                    <span className="icon">◆</span> Salle de Sport dans les jardins
                  </a>
                  <a href="#treatments" className="brands-section-text-style001">
                    <span className="icon">◆</span>Salle de coaching, musculation, cardio, fitness, yoga
                  </a>
                  <a href="#salon" className="brands-section-text-style001">
                    <span className="icon">◆</span>Sauna
                  </a>
                  <a href="#sports" className="brands-section-text-style001">
                    <span className="icon">◆</span> 2 courts de tennis en terre battue
                  </a>
                  <a href="#sports" className="brands-section-text-style001">
                    <span className="icon">◆</span>Tennis de table
                  </a>
                  <a href="#sports" className="brands-section-text-style001">
                    <span className="icon">◆</span> Boulodrome
                  </a>
                  <h1 className="brands-title2">*L’âge requis pour accéder à la piscine intérieure est de 18 ans et à partir de 16 ans accompagné d’un adulte.</h1>
                </motion.nav>

                <button
                  className="toggle-button"
                  onClick={toggleNav}
                  aria-expanded={isExpanded}
                >
                  <FaPlusCircle size={24} />
                </button>

              </nav>
            </div>
            <div className="brands-image">
              <img src={LefttImage} alt="Spa Products" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};


export default Example;

const cards = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
