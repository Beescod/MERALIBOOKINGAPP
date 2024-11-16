// import React, { useState } from 'react';
import './MobileBooking.css';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing the calendar icon


const MobileBooking = () => {



    return (
        <div className="MobileBooking">
            <div className="MAGAZINE-div">
                <a href="#Magazine" className="MAGAZINE-text">LE MAGAZINE</a>
            </div>
            <div className="RÉSERVER-div">
                <a href="#Reservations" className="RÉSERVER-text">
                <FaCalendarAlt /> {/* Calendar Icon */}
                    BOOK</a>
            </div>
        </div>
    );
};

export default MobileBooking;
