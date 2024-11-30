import React from "react";
import "./ReservationBanner.css";

const ReservationBanner = () => {
  return (
    <div className="reservation-banner">
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; <span>Reserve Your Care</span>
      </div>
      <div className="content">
        <div className="title">
          <h1>Reserve your care</h1>
          <div className="decorative-icon">
            <img src="path/to/icon.png" alt="Decorative Icon" />
          </div>
        </div>
        <p className="subtitle">
          PLEASE FILL OUT THIS FORM TO MAKE A RESERVATION REQUEST
        </p>
      </div>
    </div>
  );
};

export default ReservationBanner;
