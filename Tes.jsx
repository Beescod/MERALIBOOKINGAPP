import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";

const Example = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="brands-text">
      <div className="brands-logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <h1 className="brands-title">Les équipements du spa</h1>
      <nav className="spa-nav1">
        {/* Non-expandable links */}
        <a href="#hammams" className="brands-section-text-style001">
          <span className="icon">◆</span> 2 hammams traditionnels & 1 hammam privé
        </a>
        <a href="#treatments" className="brands-section-text-style001">
          <span className="icon">◆</span> 10 cabines multi-traitements (dont 2 duos)
        </a>
        <a href="#salon" className="brands-section-text-style001">
          <span className="icon">◆</span> Salle de relaxation avec service de restauration
        </a>

        {/* Expandable section */}
        <motion.nav
          className={`spa-nav12 ${isExpanded ? "expanded" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#sports" className="brands-section-text-style001">
            <span className="icon">◆</span> Salle de Sport dans les jardins
          </a>
          <a href="#treatments" className="brands-section-text-style001">
            <span className="icon">◆</span> Salle de coaching, musculation, cardio, fitness, yoga
          </a>
          <a href="#salon" className="brands-section-text-style001">
            <span className="icon">◆</span> Sauna
          </a>
          <a href="#sports" className="brands-section-text-style001">
            <span className="icon">◆</span> 2 courts de tennis en terre battue
          </a>
          <h1 className="brands-title2">
            *L’âge requis pour accéder à la piscine intérieure est de 18 ans et à partir de 16 ans accompagné d’un adulte.
          </h1>
        </motion.nav>

        {/* Toggle button */}
        <button
          className="toggle-button"
          onClick={toggleNav}
          aria-expanded={isExpanded}
        >
          <FaPlusCircle size={24} />
        </button>
      </nav>
    </div>
  );
};

export default Example;
