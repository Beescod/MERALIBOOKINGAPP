import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
import About from "./pages/About"; // Import the About page

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

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
                                <Products />
                                <TopProducts handleOrderPopup={handleOrderPopup} />
                                <Banner />
                                <Subscribe />
                                <Products />
                                <Testimonials />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={<>
                            <Hero handleOrderPopup={handleOrderPopup} />
                            <Products />
                            <TopProducts handleOrderPopup={handleOrderPopup} />
                            <Banner />
                            <Subscribe />
                            <Products />
                            <Testimonials />
                        </>} />
                </Routes>

                <Footer />
                <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
            </div>
        </Router>
    );
};

export default App;