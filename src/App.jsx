import './App.css'
import Lenis from '@studio-freight/lenis';
import Header from './header/Header'
import Preloader from './preloader/Preloader'
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from './utils/globalContext';
import SectionOne from './section1/SectionOne';
import NFTCarousel from './nft showcases/NFTCarousel';
import Showcase from './nft showcases/Showcase';
import Community from './community/Community';
import { useEffect } from 'react';


function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
      smoothTouch: false, // Disable for touch devices if needed
    });

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <GlobalContext>
    <AnimatePresence>
    <div>
      <Preloader />
      <div>
        <Header />
            <SectionOne />
            <Showcase />
            <Community />
      </div>
      </div>
      </AnimatePresence>
      </GlobalContext>
  )
}

export default App
