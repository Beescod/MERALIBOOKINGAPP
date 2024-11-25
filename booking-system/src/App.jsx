import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar copy/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import MobileBooking from "./components/MobileBooking/BanMobileBooking";
import Logo from "./components/Logo/Logo";
import Cards from "./components/Cards/Cards";
import Brands from "./components/brands/brands";
import Mobilebrands from "./components/Mobilebrands/Mobilebrands";
import MobileProducts from "./components/MobileProducts/MobileProducts";

const App = () => {
    const [orderPopup, setOrderPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();

        // Set a timer to hide the loading page
        const timer = setTimeout(() => setIsLoading(false), 4000); // 2 seconds loading
        return () => clearTimeout(timer);
    }, []);

    // Show loading page while `isLoading` is true
    if (isLoading) {
        return <Logo />;
    }

    return (
        <Router>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar handleOrderPopup={handleOrderPopup} />

                {/* Define Routes */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero handleOrderPopup={handleOrderPopup} />
                                <Products handleOrderPopup={handleOrderPopup} />
                                {/* <MobileProducts handleOrderPopup={handleOrderPopup} /> */}
                                <Subscribe />
                                <Brands />
                                <Mobilebrands />
                                <Banner />
                                <Cards />
                                {/* <TopProducts handleOrderPopup={handleOrderPopup} /> */}
                                <Testimonials />
                                <MobileBooking />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <Hero handleOrderPopup={handleOrderPopup} />
                                <Products />
                                <TopProducts handleOrderPopup={handleOrderPopup} />
                                <Banner />
                                <Subscribe />
                                <Products />
                                <Testimonials />
                            </>
                        }
                    />
                </Routes>

                <Footer />
                <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
            </div>
        </Router>
    );
};

export default App;
