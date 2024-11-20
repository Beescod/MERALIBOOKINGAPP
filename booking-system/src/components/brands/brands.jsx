import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import './brands.css'; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets/images/product.jpg";
import LefttImage from "../../assets/images/Lefttimage.jpg";


const Example = () => {
  return (
    <div className="bg-neutral-800">
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
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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
  return (
    <div
      key={card.id}
      className="group relative h-screen w-screen overflow-hidden bg-neutral-200"
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
              <h1 className="brands-title">The brands of the spa</h1>
              <nav className="spa-nav1">
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
                <a href="#sports" className="brands-section-text-style001">
                  <span className="icon">◆</span> The Sports
                </a>
                <a href="#sports" className="brands-section-text-style001">
                  <span className="icon">◆</span> The Sports
                </a>
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

const Mobilebrand = () => {

  return (
    <div>
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
      <div className="brands-section2">
        <div className="brands-text">
          <div className="brands-logo">
            <img src={LogoImage} alt="Logo" />
          </div>
          <h1 className="brands-title">The brands of the spa</h1>
          <nav className="spa-nav1">
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
            <a href="#sports" className="brands-section-text-style001">
              <span className="icon">◆</span> The Sports
            </a>
            <a href="#sports" className="brands-section-text-style001">
              <span className="icon">◆</span> The Sports
            </a>
          </nav>
        </div>
        <div className="brands-image">
          <img src={LefttImage} alt="Spa Products" />
        </div>
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
