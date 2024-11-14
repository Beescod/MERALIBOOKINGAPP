// import React, { useState } from 'react';
import '../assets/css/MobileBooking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileBooking = () => {



    return (
        <div className="MobileBooking">
            <div className="MAGAZINE-div">
                <a href="#Magazine" className="MAGAZINE-text">LE MAGAZINE</a>
            </div>
            <div className="RÉSERVER-div">
                <a href="#Reservations" className="RÉSERVER-text"><FontAwesomeIcon icon="fa-thin fa-calendar-lines-pen" />BOOK</a>
            </div>
        </div>
    );
};

export default MobileBooking;
