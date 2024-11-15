import PropTypes from 'prop-types'; // Import PropTypes
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import Logo from './components/Logo';
import './App.css';
import HomePage from './views/Home';
// import AboutPage from './views/About';
// import ContactPage from './views/Contact';
import Navbar from '../src/components/Navbar';
import BackToTopButton from '../src/components/BackToTopButton';
import Footer from '../src/components/Footer';
import MobileBooking from '../src/components/MobileBooking';

function LoadingWrapper({ children, isLoading }) {
  return isLoading ? <Logo /> : children;
}

// Adding prop types validation for LoadingWrapper component
LoadingWrapper.propTypes = {
  children: PropTypes.node.isRequired,  // children can be any renderable node (element, string, etc.)
  isLoading: PropTypes.bool.isRequired, // isLoading should be a boolean
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 9000); // 90 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <LoadingWrapper isLoading={isLoading}>
              <Navbar />
              <HomePage />
              <BackToTopButton/>
              <Footer/>
              <MobileBooking/>
            </LoadingWrapper>
          }
        />
        {/* <Route
          path="/about"
          element={
            <LoadingWrapper isLoading={isLoading}>
              <AboutPage />
            </LoadingWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <LoadingWrapper isLoading={isLoading}>
              <ContactPage />
            </LoadingWrapper>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
