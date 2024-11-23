import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Img1 from "../../assets/images/spa-section.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import LogoImage from '../../assets/images/LoagoL.png';
import "./Products.css";
import AOS from 'aos';




const Example = () => {
  return (
    <div className="brands bg-neutral-800">
      <Products />
    </div>
  );
};

const Products = () => {
  const descriptionRef = useRef(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
  
  
  useEffect(() => {
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
  }, []);

  return (
    <div className="spa-products-container">
      <div className="products-header">
        <p data-aos="fade-up" className="products-subtitle">Relax in the best spa in Marrakech</p>
      </div>
      <div className="spa-container">
        {/* Main Image */}
        <div className="spa-container-image">
          <img src={Img1} alt="Spa of La Mamounia" />
        </div>

        {/* Scroll-triggered Description */}
        <div ref={descriptionRef} className="spa-description">
          <a>
            <img src={LogoImage} alt="Dynamic" width={150} height={150} />
          </a>
          <h1>Dreaming, relaxing: beauty<br/> and well-being at the spa of <br/> La Mamounia</h1>
          <p>
            Spread over 2,500 m², the spa of La Mamounia is an extraordinary experience to live in its sumptuous setting of the Thousand and One Nights.
          </p>
          <p>
            If everything in La Mamounia, by the beauty of the place, the harmony and the sweetness that reign there, incites to enjoy every moment, the spa is the place where time can...
          </p>
          <p data-aos="fade-up" className="products-subtitle">
          A world in itself, a world for oneself where expert treatments and delicate massages make you travel in a dream of oriental splendors.
        </p>
          <p data-aos="fade-up" className="products-subtitle">
          A luxurious bubble of refinement that includes two traditional hammams and a private hammam, ten – treatment and massage cabins including three duets, a heated pool, a jacuzzi and a private spa.
          </p>
          <h1>Dreaming, relaxing: beauty and well-being at the spa of La Mamounia</h1>
            <div className="spa-container-image">
            <img src={Img1} alt="Spa of La Mamounia" />
            <div className="shine-effect"></div>
          </div>
          {/* <div className="spa-container-image">
            <img src={Img1} alt="Spa of La Mamounia" />
            <div className="shine-effect"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
