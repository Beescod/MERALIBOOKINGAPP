// Footer.js
import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-social">
          <div className="social-icons">
            {/* Add your SVGs or icons here */}
            <span className="icon">FB</span>
            <span className="icon">X</span>
            <span className="icon">IG</span>
            <span className="icon">YT</span>
            <span className="icon">IN</span>
          </div>
          <div className="logo">
            <img src="/path/to/logo.png" alt="La Mamounia Marrakech Logo" />
          </div>
          <div className="contact-info">
            <p>Bad Jdid Avenue</p>
            <p>40040 Marrakech-Medina, Morocco</p>
            <p>Tel: +212 524 388 600</p>
            <p>Email: info@mamounia.com</p>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <li>ACCOMMODATIONS</li>
            <li>RESTAURANTS</li>
            <li>BARS</li>
            <li>TEA ROOMS</li>
            <li>SPA & WELLNESS</li>
            <li>EVENTS</li>
            <li>SHOPS</li>
            <li>SPECIAL OFFERS</li>
            <li>NEWSLETTER</li>
          </ul>
        </div>
      </div>
      <div className="footer-middle">
        <p>RESERVE YOUR :</p>
        <p>STAY | TABLE | CARE | EVENT</p>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <p>Since 1923</p>
          <p>The Magazine</p>
          <p>Press</p>
          <p>E-Brochure</p>
          <p>Gallery videos</p>
          <p>Photo gallery</p>
          <p>Careers</p>
          <p>Legal notices</p>
          <p>Confidentiality</p>
          <p>Contact</p>
          <p>FAQ</p>
          <p>Club Leaders</p>
        </div>
        <div className="footer-sitemap">Site map</div>
      </div>
    </footer>
  );
};

export default Footer;
