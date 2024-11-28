// import React, { useState } from 'react';
import './MobileBooking.css';
import booking from '../../assets/images/Booking.png';

const MobileBooking = () => {
    return (
        <div className="MobileBooking">
            <div className="MAGAZINE-div">
                <a href="#Magazine" className="MAGAZINE-text">LE MAGAZINE</a>
            </div>
            <div className="RÉSERVER-div">
                <a href="#Reservations" className="RÉSERVER-text">
                    <img src={booking} alt="Booking Icon" className="booking-icon" />
                    BOOK
                </a>
            </div>
        </div>
    );
};

export default MobileBooking;
