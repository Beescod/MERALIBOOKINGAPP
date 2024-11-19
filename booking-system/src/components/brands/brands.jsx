import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./brands.css"; // Link to the CSS file
import LogoImage from "../../assets/images/spa-section.jpg";
import RightImage from "../../assets/images/product.jpg";

const BrandsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div ref={targetRef} className="brands-wrapper">
      {/* Section 1 */}
      <section className="brands-section1-page h-screen">
        <div className="brands-section1">
          <div className="brands-text">
            <div className="brands-logo">
              <img src={LogoImage} alt="Logo" />
            </div>
            <h1 className="brands-title">The brands of the spa</h1>
            <p className="brands-description">
              The prestigious brands Valmont, Augustinus Bader, and MarocMaroc
              offer the best of their expertise for targeted care that combines
              cutting-edge scientific research and sweet sensoryism.
            </p>
            <p className="brands-description">
              Complementing this experience of total well-being, our team of
              hairdressers, beauticians, barbers, and nail-artists bring their
              precious know-how for last perfection touches.
            </p>
          </div>
          <div className="brands-image">
            <img src={RightImage} alt="Spa Products" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="brands-section2-page h-screen">
        <motion.div style={{ x }} className="brands-section2">
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
          <div className="brands-image">
            <img src={RightImage} alt="Spa Products" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BrandsSection;
