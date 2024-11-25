import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Img1 from "../../assets/images/spa-section.jpg";
import Img12 from "../../assets/images/spa-section.jpg";
import Img123 from "../../assets/images/spa-section.jpg";
import fixedproduct from "../../assets/images/fixed-product.jpeg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import LogoImage from '../../assets/images/LoagoL.png';
import "./Products.css";
import AOS from 'aos';



const Products = () => {
  // Define motion variants for both directions
  const containerVariants = {
    animate: {
      x: [500, 0], // Horizontal motion: starts from 100px right to 0
      y: [1000, 0], // Vertical motion: starts from 100px bottom to 0
    },
  };

  const itemVariants = {
    animate: (i) => ({
      x: i % 2 === 0 ? [50, 0] : [0, -50], // Alternates horizontal & vertical
      y: i % 2 === 0 ? [0, 50] : [50, 0],
    }),
  };

  const items = Array.from({ length: 1 }, (_, i) => i); // 10 carousel items


  return (
    <motion.div
    className="carousel-container"
    variants={containerVariants}
    initial="initial"
    animate="animate"
    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "20px",
    }}
  >
    {items.map((_, i) => (
      <motion.div
        key={i}
        custom={i}
        variants={itemVariants}
        animate="animate"
        // transition={{
        //   delay: i * 0.3,
        //   // repeat: Infinity,
        // }}
        style={{
          width: "1000px",
          height: "3000px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // borderRadius: "8px",
        }}
      >
        {i + 1}
      </motion.div>
    ))}
  </motion.div>
  );
};

export default Products























import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Img1 from "../../assets/images/spa-section.jpg";
import Img12 from "../../assets/images/spa-section.jpg";
import Img123 from "../../assets/images/spa-section.jpg";
import fixedproduct from "../../assets/images/fixed-product.jpeg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import LogoImage from '../../assets/images/LoagoL.png';
import "./Products.css";
import AOS from 'aos';



const Products = () => {
  // Define motion variants for both directions
  const containerVariants = {
    animate: {
      x: [100, 0], // Horizontal motion: starts from 100px right to 0
      y: [100, 0], // Vertical motion: starts from 100px bottom to 0
    },
  };

  const itemVariants = {
    animate: (i) => ({
      x: i % 2 === 0 ? [50, 0] : [0, -50], // Alternates horizontal & vertical
      y: i % 2 === 0 ? [0, 50] : [50, 0],
    }),
  };

  const items = Array.from({ length:  }, (_, i) => i); // 10 carousel items


  return (
    <div className="spa-products-container">
      <div className="products-header">
        <p data-aos="fade-up" className="products-subtitle">Relax in the best spa in Marrakech</p>
      </div>
      <div className="spa-container">
        {/* Main Image */}
        <div className="spa-container-image">
          <img src={fixedproduct} alt="Spa of La Mamounia" />
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
            <img src={Img12} alt="Spa of La Mamounia" />
            <div className="shine-effect"></div>
          </div>
          <div className="spa-container-image">
            <img src={Img123} alt="Spa of La Mamounia" />
            <div className="shine-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products

















import React from 'react';
import './products.css';

const SpaSection = () => {
  return (
    <div className="pin-spacer">
      <section className="panel regular contentImageResize">
        <div className="panel-container">
          <div className="panel-left">
            <figure className="imageResponsive landscape backstretch model-imgResize1">
              <img
                src="https://mamounia.com/media/cache/jadro_resize/rc/eqvlftxU1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg"
                srcSet="https://mamounia.com/media/cache/jadro_resize/rc/eqvlftxU1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 440w, https://mamounia.com/media/cache/jadro_resize/rc/nFQwAKAd1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 640w"
                sizes="(max-width: 449px) 440px, (max-width: 649px) 640px"
                alt="Hotel Spa Marrakech Hammam et Massages La Mamounia"
                className="imageResponsive-block"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="panel-right">
            <div className="panel-inner">
              <div className="panel-content">
                <div className="panel-content-1">
                  <h2 className="title title2 withDecor">
                    Rêver, se détendre :<em></em> beauté et bien-être au spa de La&nbsp;Mamounia&nbsp;
                  </h2>
                  <div className="featuredText">
                    <p>
                      Se déployant sur 2 500 m², le spa de La&nbsp;Mamounia est une extraordinaire expérience à
                      vivre dans son somptueux cadre des Mille et Une Nuits.
                    </p>
                  </div>
                  <p>
                    Si tout à La&nbsp;Mamounia, par la beauté des lieux, l’harmonie et la douceur qui y règnent,
                    incite à profiter de chaque instant, le spa est l’endroit où le temps peut s’arrêter pour
                    quelques heures.&nbsp;
                  </p>
                </div>
                <div className="panel-secondContent secondContent contentImgInline">
                  <div className="secondContent-content">
                    <div className="secondContent-innerText isSmallScrollbar">
                      <p>
                        Un monde en soi, un monde pour soi où soins experts et délicats massages font voyager dans
                        un rêve de splendeurs orientales.&nbsp;
                      </p>
                      <p>
                        Une luxueuse bulle de raffinement qui comprend deux hammams traditionnels et un hammam
                        privé, dix cabines de soins et massages – dont trois duos, une piscine chauffée, un jacuzzi
                        et un spa privé.&nbsp;
                      </p>
                      <p><strong>Ouvert de&nbsp;09h00&nbsp;à&nbsp;21h00</strong></p>
                      <div className="itemCollection count-1 isList isButtons linksCollection">
                        <div className="linksCollection-item">
                          <a
                            target="_blank"
                            href="/media/original/61a0fc96c135f/qr-code-menu-spa-.pdf"
                            className="linksCollection-link isGold btnDefault"
                          >
                            <span>Découvrir notre carte du spa</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="secondContent-image">
                    <figure className="imageResponsive portrait backstretch">
                      <img
                        src="https://mamounia.com/media/cache/jadro_resize/rc/OofRxBI21732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-07-.jpeg"
                        sizes="(max-width: 449px) 440px, (max-width: 649px) 640px"
                        alt="Hotel Spa Marrakech Hammam et Massages La Mamounia"
                        className="imageResponsive-block"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaSection;
