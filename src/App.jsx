import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StarOverlay from './components/StarOverlay';
import CursorTrail from './components/CursorTrail';
import PageTransition from './components/PageTransition';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia('(max-width: 768px)').matches || 
                            ('ontouchstart' in window) || 
                            (navigator.maxTouchPoints > 0);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="App">
      {!isMobile && <CursorTrail />}
      <StarOverlay />
      <Header />
      <PageTransition />
      <Footer />
    </div>
  );
}

export default App;
