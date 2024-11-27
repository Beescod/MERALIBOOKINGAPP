import { useState, useEffect } from 'react';
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

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const selectLanguage = (language) => {
    console.log(`Selected language: ${language}`);
    setShowDropdown(false);
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="burger-menu-container" onClick={handleMenuClick}>
          <div className="burger-menu">
            <div className={burgerClass}></div>
            <div className="burger-bar middle-bar" style={{ width: '20px' }}></div>
            <div className={burgerClass}></div>
          </div>
          <span className="menu-label text-style">Menu</span>
        </div>
      </nav>

      <div className={menuClass}>
        <nav className="flex">
          {/* Other menu content */}
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
            <span className={`dropdown-icon ${showDropdown ? 'rotated' : ''}`}>▼</span>
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
          <a href="#Reservations" className="text-style2">RÉSERVER</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
