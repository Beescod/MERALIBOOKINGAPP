import React from "react";
import Banner from "../../assets/images/Subscribe.jpg";
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div
      className="subscribe-container"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    />
  );
};

export default Subscribe;
