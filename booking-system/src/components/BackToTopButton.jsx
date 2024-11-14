import React, { useState, useEffect } from 'react';

// The BackToTopButton component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // 300px scroll threshold
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button 
        className="siteFooter-goTop js-goTop" 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '10px',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          background: '#d0b581',
          color: '#000',
          fontSize: '22px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 225,
          border: 'none',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <i 
          className="ico ico-arrow-up" 
          style={{
            fontFamily: '"icomoon"',
            fontSize: '22px',
            fontWeight: '600',
            color: '#000',
            zIndex: 225,
            transition: 'transform 0.5s ease-in-out',
          }}
        ></i>
      </button>
    )
  );
};

export default BackToTopButton;
