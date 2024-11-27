import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import spapiscineinterieure from "../../assets/images/spa-piscine-interieure.jpeg";
import spaaccueil01 from "../../assets/images/spa-accueil-01.jpeg";

import './Products.css';
import AOS from 'aos';

const SpaSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <div className="pin-spacer">
      <div className="Mobile-products-header1">
        <p data-aos="fade-in" className="Mobile-products-subtitle">
          Relaxez-vous dans le meilleur hôtel spa de Marrakech
        </p>
      </div>
      <section className="panel regular contentImageResize">
        <div className="panel-container">
          <div className="panel-left">
            <div className="panel-image-1">
              <figure className="imageResponsive landscape backstretch model-imgResize1">
                <img
                  src="https://mamounia.com/media/cache/jadro_resize/rc/eqvlftxU1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg"
                  srcSet="https://mamounia.com/media/cache/jadro_resize/rc/eqvlftxU1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 440w,
                          https://mamounia.com/media/cache/jadro_resize/rc/nFQwAKAd1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 640w,
                          https://mamounia.com/media/cache/jadro_resize/rc/agiVMXSy1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 800w,
                          https://mamounia.com/media/cache/jadro_resize/rc/a7Nyr2Uj1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 420w,
                          https://mamounia.com/media/cache/jadro_resize/rc/Evx8q81u1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 870w,
                          https://mamounia.com/media/cache/jadro_resize/rc/8046BFAh1732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 1160w,
                          https://mamounia.com/media/cache/jadro_resize/rc/ihsCfyw91732191891/jadroRoot/medias/653fcee154467/654117df6b4ca/654117ee24e7c/65411801c16b2/spa-piscine-interieure-01-.jpeg 1700w"
                  sizes="(max-width: 449px) 440px,(max-width: 649px) 640px,(max-width: 849px) 800px,(max-width: 1024px) 420px,(max-width: 1439px) 870px,(max-width: 1919px) 1160px,1700px"
                  width="1700"
                  height="2125"
                  alt="Hotel Spa Marrakech Hammam et Massages La Mamounia"
                  className="imageResponsive-block"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
          <div className="panel-right">
            <div className="panel-inner">
              <div className="panel-content">
                <div className="panel-content-1">
                  <h2 className="title title2 withDecor" data-aos="fade-in">
                    Rêver, se détendre beauté et bien-être au spa de La Mamounia
                  </h2>
                  <div className="featuredText" data-aos="fade-in">
                    <p>Se deployant sur 2 500 m², le spa de La Mamounia est une extraordinaire experience vivre dans son somptueux cadre des Mille et Une Nuits.</p>
                  </div>
                  <p>Si tout à La Mamounia, par la beauté des lieux, l’harmonie et la douceur qui y règnent, incite à profiter de chaque instant, le spa est l’endroit où le temps peut s’arrêter pour quelques heures.</p>
                </div>
                <div className="panel-secondContent secondContent contentImgInline">
                  <div className="secondContent-content">
                    <div className="secondContent-innerText isSmallScrollbar panel-content-1" data-aos="fade-in">
                      <p>Un monde en soi, un monde pour soi où soins experts et délicats massages font voyager dans un rêve de splendeurs orientales.</p>
                      <p>Une luxueuse bulle de raffinement qui comprend deux hammams traditionnels et un hammam privé, dix cabines de soins et massages – dont trois duos, une piscine chauffée, un jacuzzi et un spa privé.</p>
                      <p><strong>Ouvert de 09h00 à 21h00</strong></p>
                      <div className="itemCollection count-1 isList isButtons linksCollection" data-aos="fade-in">
                        <div className="linksCollection-item">
                          <a target="_blank" href="/media/original/61a0fc96c135f/qr-code-menu-spa-.pdf" className="linksCollection-link isGold btnDefault">
                            <span>Découvrir notre carte du spa</span>
                          </a>
                        </div>
                      </div>
                      <figure className="imageResponsive landscape backstretch">
                        <img
                          src={spaaccueil01}
                          alt="Hotel Spa Marrakech Hammam et Massages La Mamounia"
                          className="responsive-rectangle"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="secondContent-content">
                  <figure className="imageResponsive landscape backstretch">
                        <img
                          src={spapiscineinterieure}
                          alt="Hotel Spa Marrakech Hammam et Massages La Mamounia"
                          className="responsive-rectangle"
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
