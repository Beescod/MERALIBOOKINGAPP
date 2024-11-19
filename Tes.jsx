import React from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './brands.css'; // Link to the CSS file
import LogoImage from "../../assets/images/LoagoL.png";
import RightImage from "../../assets//images/product.jpg";

const BrandsSection = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);


    return (
        <div ref={targetRef} className="brands-wrapper">
        <section ref={targetRef} className="targetRef">
            <div className="targetRef-sticky sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flexgap-4">
                    <div className="brands-section1">
                        <div className="brands-text">
                            <div className="brands-logo">
                                <img src={LogoImage} alt="Logo" />
                            </div>
                            <h1 className="brands-title">The brands of the spa</h1>
                            <p className="brands-description">
                                The prestigious brands Valmont, Augustinus Bader, and MarocMaroc offer
                                the best of their expertise for targeted care that combines cutting-edge
                                scientific research and sweet sensoryism.
                            </p>
                            <p className="brands-description">
                                Complementing this experience of total well-being, our team of
                                hairdressers, beauticians, barbers, and nail-artists bring their
                                precious know-how for last perfection touches.
                            </p>
                        </div>

                        {/* Image Content */}
                        <div className="brands-image">
                            <img src={RightImage} alt="Spa Products" />
                        </div>
                    </div>
                </motion.div>
                <motion.div style={{ x }} className="flexgap-4">
                    <div className="brands-section2">
                        <div className="brands-text">
                            <div className="brands-logo">
                                <img src={LogoImage} alt="Logo" />
                            </div>
                            <h1 className="brands-title">The brands of the spa</h1>
                            <nav className="spa-nav">
                                <a href="#hammams" className="brands-section-brands-section-text-style001">
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
                                <a href="#sports" className="brands-section-text-style001">
                                    <span className="icon">◆</span> The Sports
                                </a>
                                <a href="#sports" className="brands-section-text-style001">
                                    <span className="icon">◆</span> The Sports
                                </a>
                            </nav>
                        </div>
                        <div className="brands-image">
                            <img src={RightImage} alt="Spa Products" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        </div>
    );
};

const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  

  
  const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "Title 7",
      id: 7,
    },
  ];


export default BrandsSection;


const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-screen w-screen overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
