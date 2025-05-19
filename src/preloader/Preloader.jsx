import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import './preloader.scss'
import PreloaderText from './component/PreloaderText';
import PreloaderLeftText from './component/preloaderLeftText';
import { useGlobalContext } from '../utils/globalContext';

const Preloader = () => {
  const { preloaderDone, setPreloaderDone } = useGlobalContext();
  
  // Prevent scrolling when preloader is active
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setPreloaderDone(true);
      // Re-enable scrolling when preloader is done
      document.body.style.overflow = 'auto';
    }, 11000); // 11 seconds
    
    return () => {
      clearTimeout(timer);
      // Make sure scrolling is re-enabled when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [setPreloaderDone]);
  
  return (
    <motion.div 
      initial={{ y: 0 }}             // Start in normal position (visible)
      animate={{ y: "100%" }}        // Slide out to the bottom
      transition={{
        delay: 10,
        duration: 1,              
        ease: [0.32, 0.72, 0, 1],    // Smooth easing
      }}
      style={{
        position: "fixed",           
        willChange: "transform",
        zIndex: 9999,               // Higher z-index to ensure it's on top
      }}
      className='preloader'>

      <div className='preloader_content'>
        <PreloaderLeftText />
        <PreloaderText />
      </div>
      <motion.div className='loading_digit_container'>
        <motion.div
          initial={{ y: 100, x:-50 }}
          animate={{ y: -200 }}
          exit={{ y: -200 }}
          transition={{
            duration: 5,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className='loading_digit_1'
        >10</motion.div>
        
        <motion.div 
          initial={{ y: 100, x:-50 }}
          animate={{ y: -280 }}
          exit={{ y: -200 }}
          transition={{
            duration: 5,
            delay: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }} 
          className='loading_digit_2'
        >20</motion.div>
        
        <motion.div 
          initial={{ y: 100, x:-50 }}
          animate={{ y: -300 }}
          exit={{ y: -200 }}
          transition={{
            duration: 6,
            delay: 2.4,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}  
          className='loading_digit_3'
        >40</motion.div>
        
        <motion.div
          initial={{ y: 100, x:-50 }}
          animate={{ y: -350 }}
          exit={{ y: -200 }}
          transition={{
            duration: 7,
            delay: 3.4,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className='loading_digit_4'
        >60</motion.div>
        
        <motion.div 
          initial={{ y: 100, x:-50 }}
          animate={{ y: -350 }}
          exit={{ y: -200 }}
          transition={{
            duration: 8,
            delay: 4.4,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className='loading_digit_5'
        >80</motion.div>
        
        <motion.div 
          initial={{ y: 100, x:-50 }}
          animate={{ y: -400 }}
          exit={{ y: -200 }}
          transition={{
            duration: 9,
            delay: 5.4,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className='loading_digit_6'
        >100</motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Preloader