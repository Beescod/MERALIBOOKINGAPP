import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import './App.css';
import HomePage from './views/Home';
// import AboutPage from './views/About';
// import ContactPage from './views/Contact';

function LoadingWrapper({ children, isLoading }) {
  return isLoading ? <Logo /> : children;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 90000); // 3 seconds of loading
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
              <HomePage />
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
