// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './MobileBooking.css';
import booking from '../../assets/images/Booking.png';

const MobileBooking = () => {
    return (
        <div className="MobileBooking">
            <div className="MAGAZINE-div">
                <a href="#Magazine" className="MAGAZINE-text">LE MAGAZINE</a>
            </div>
            <div className="RÉSERVER-div">
                <Link to="/booking" className="RÉSERVER-text">
                    <img src={booking} alt="Booking Icon" className="booking-icon" />
                    BOOK
                </Link>
            </div>
        </div>
    );
};

export default MobileBooking;
