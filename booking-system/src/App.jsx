import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import './App.css';
import HomePage from './views/Home';
// import AboutPage from './views/about';
// import ContactPage from './views/Services';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timer, after which the loading screen disappears
    const timer = setTimeout(() => setIsLoading(false), 3000);  // 3 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoading ? <Logo /> : <HomePage />} />
        {/* <Route path="/about" element={isLoading ? <Logo /> : <AboutPage />} /> */}
        {/* <Route path="/contact" element={isLoading ? <Logo /> : <ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
