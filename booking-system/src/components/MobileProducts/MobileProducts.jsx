import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/images/spa-section.jpg";
import LogoImage from "../../assets/images/LoagoL.png";
import "./MobileProducts.css";
import Banner from "../../assets/images/product2.jpg";

const Products = () => {
  const [isMobile, setIsMobile] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Only run observer if on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          descriptionRef.current.classList.add("show");
        } else {
          descriptionRef.current.classList.remove("show");
        }
      },
      { threshold: 0.5 } // Adjusts when the animation should start
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, [isMobile]);

  if (!isMobile) return null; // Do not render the component if not on mobile

  return (
    <div className="Mobile-spa-products-container">
      <div className="Mobile-products-header">
        <p data-aos="fade-up" className="Mobile-products-subtitle">
          Relaxez-vous dans le meilleur hôtel spa de Marrakech
        </p>
      </div>
      <div className="Mobile-spa-container">
        <div ref={descriptionRef} className="Mobile-pa-description">
          <a>
            <img src={Banner} alt="Dynamic" width={800} height={200} />
          </a>
          <div className="Mobile-products-header">
            <p className="Mobile-products-subtitle1">
              <a>
                <img src={LogoImage} alt="Dynamic" width={100} height={200} />
              </a>
            </p>
          </div>
          <h1>
            Dreaming, relaxing: beauty
            <br /> and well-being at the spa of
            <br /> La Mamounia
          </h1>
          <p>
            Spread over 2,500 m², the spa of La Mamounia is an extraordinary
            experience to live in its sumptuous setting of the Thousand and One
            Nights.
          </p>
          <p data-aos="fade-up" className="Mobile-products-subtitle">
            A world in itself, a world for oneself where expert treatments and
            delicate massages make you travel in a dream of oriental splendors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
