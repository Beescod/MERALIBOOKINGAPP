import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import hairdressing from '../../assets/images/Hairdressing.jpg';
import massages from '../../assets/images/Massages.jpg';
import Nailservices from '../../assets/images/Nail-services.jpeg';
import Facialtreatments from '../../assets/images/Facial-treatments.jpg';
import Maderotherapy from '../../assets/images/Maderotherapy.jpg';
import Aesthetics from '../../assets/images/Aesthetics.jpg';
import Laser from '../../assets/images/Laser.jpg';
import defaultImage from '../../assets/images/Default.jpg';
import BDLogo from '../../assets/images/BDLogo.png';
import downarrow from '../../assets/images/downarrow.png';


const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [image, setImage] = useState(defaultImage);
  const [hoverClass, setHoverClass] = useState("");
  const [animationClass, setAnimationClass] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 90;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleMouseEnter = (img) => {
    setImage(img);
    setHoverClass('hovered');
  };

  const handleMouseLeave = () => {
    setImage(defaultImage);
    setHoverClass('');
  };

  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  const handleMenuClick = () => {
    updateMenu();
    toggleMenu();
  };


  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const selectLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    setShowDropdown(false);
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''} `}>
      <nav>
        <div className="burger-menu-container" onClick={handleMenuClick}>
          <div className="burger-menu">
            <div className={burgerClass}></div>
            <div className="burger-bar middle-bar" style={{ width: '20px' }}></div>
            <div className={burgerClass}></div>
          </div>
          <span className="menu-label">Menu</span>
        </div>
      </nav>

      <div className={menuClass}>
        <nav className="navflex">
          <div className="burger-menu-container" onClick={updateMenu}>
            <div className="burger-menu2">
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>
            <span className="menu-label-Close">Close</span>
          </div>

          <div className="full-container">
            <div className="your-container">
              <div className="your-container2">
                <div className="your1M">
                  <span className="text-style319">À Propos de Nous</span>
                </div>
                <div className="your21">
                  <div className="line-container1">

                    <div className="your1">
                      <span className="text-style319">À Propos de Nous</span>
                    </div>
                    <div className={`line1 ${isMenuOpen ? 'animate-line1' : ''}`}></div>
                  </div>
                  <div className="right">
                    <span
                      onMouseEnter={() => handleMouseEnter(Facialtreatments)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Notre Philosophie
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(hairdressing)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Notre Équipe
                    </span>
                  </div>

                </div>


                <div className="your2">
                  <div className="line-container">
                    <div className="your">
                      <span className="text-style319">SERVICES</span>
                    </div>
                    <div className={`line ${isMenuOpen ? 'animate-line' : ''}`}></div>
                  </div>
                  <div className="right">
                    <span
                      onMouseEnter={() => handleMouseEnter(Facialtreatments)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Massages et Madérothérapie
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(hairdressing)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Coiffure
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(Facialtreatments)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Onglerie
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(Facialtreatments)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Soins du Visage
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(Facialtreatments)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Ésthetique
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(Aesthetics)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Laser
                    </span>
                    <span
                      onMouseEnter={() => handleMouseEnter(Laser)}
                      onMouseLeave={handleMouseLeave}
                      className={`text-style3 ${hoverClass} ${animationClass}`}
                    >
                      Packs
                    </span>
                  </div>
                </div>


                <div className="menu-options">
                  <div className="menu-item">
                    <span className="line-divider">|</span>
                    <span className="text-style31">OFFRES SPÉCIALES</span>
                  </div>
                  <div className="menu-item">
                    <span className="line-divider">|</span>
                    <span className="text-style31">BOUTIQUE</span>
                  </div>
                </div>
              </div>

              <div className="image-container">
                <div className={`image-wrapper ${animationClass}`}>
                  <img src={image} className="img" alt="Dynamic" width={400} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="language-options" style={{ display: isScrolled ? 'none' : 'flex' }}>
          <a
            className="text-style1"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            FR/EN
            <span className={`dropdown-icon ${showDropdown ? 'rotated' : ''}`}>
              <img src={downarrow} alt="Toggle Dropdown" />
            </span>
          </a>
          {showDropdown && (
            <div className="dropdown-menu">
              <a
                href="#"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  selectLanguage("FR");
                }}
              >
                Français
              </a>
              <a
                href="#"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault();
                  selectLanguage("EN");
                }}
              >
                English
              </a>
            </div>
          )}
        </div>
        <div
          className={`nav-logo ${isScrolled ? 'open-from-middle' : ''}`}
          style={{ display: isScrolled ? 'block' : 'none' }}
        >
          <a href="/">
            <img src={BDLogo} alt="Dynamic" width={100} height={40} className="nav-logo-i" />
          </a>
        </div>

        <div className="nav-links">
          <a href="#Magazine" className="text-style2">LE MAGAZINE</a>
          <Link to="/booking" className="text-style2">RÉSERVER</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
