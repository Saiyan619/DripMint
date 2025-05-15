import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import './preloader.scss'
import PreloaderText from './component/PreloaderText';
import PreloaderLeftText from './component/preloaderLeftText';
import { useGlobalContext } from '../utils/globalContext';
const Preloader = () => {
  const { preloaderDone, setPreloaderDone } = useGlobalContext();
  console.log(preloaderDone)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderDone(true);
    }, 11000); // 12 seconds
    
    return () => clearTimeout(timer);
  }, [setPreloaderDone]);
  return (
    <motion.div 
    initial={{ y: 0 }}             // Start in normal position (visible)
    animate={{ y: "100%" }}        // Slide out to the bottom
      transition={{
      delay:10,
      duration: 1,              
      ease: [0.32, 0.72, 0, 1],    // Smooth easing
    }}
    style={{
      position: "fixed",           
      willChange: "transform",     
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
           ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for extra smoothness
           type: "tween",              // Explicitly set the animation type
         }}
         style={{
           willChange: "transform",    // Hint to browser to optimize for animation
           backfaceVisibility: "hidden", // Prevent flickering in some browsers
          }}
          className='loading_digit_1'>10</motion.div>
        
        <motion.div initial={{ y: 100, x:-50 }}
         animate={{ y: -280 }}
         exit={{ y: -200 }}
         transition={{
           duration: 5,
           delay: 1.4,
           ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for extra smoothness
           type: "tween",              // Explicitly set the animation type
         }}
         style={{
           willChange: "transform",    // Hint to browser to optimize for animation
           backfaceVisibility: "hidden", // Prevent flickering in some browsers
          }} className='loading_digit_2'>20</motion.div>
        
        <motion.div initial={{ y: 100, x:-50 }}
         animate={{ y: -300 }}
         exit={{ y: -200 }}
         transition={{
           duration: 6,
           delay: 2.4,
           ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for extra smoothness
           type: "tween",              // Explicitly set the animation type
         }}
         style={{
           willChange: "transform",    // Hint to browser to optimize for animation
           backfaceVisibility: "hidden", // Prevent flickering in some browsers
          }}  className='loading_digit_3'>40</motion.div>
        <motion.div
      initial={{ y: 100, x:-50 }}
      animate={{ y: -350 }}
      exit={{ y: -200 }}
      transition={{
        duration: 7,
        delay: 3.4,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for extra smoothness
        type: "tween",              // Explicitly set the animation type
      }}
          style={{
            willChange: "transform",    // Hint to browser to optimize for animation
            backfaceVisibility: "hidden", // Prevent flickering in some browsers
          }}
          className='loading_digit_4'>60</motion.div>
        <motion.div initial={{ y: 100, x:-50 }}
        animate={{ y: -350 }}
        exit={{ y: -200 }}
        transition={{
          duration: 8,
          delay: 4.4,
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for extra smoothness
          type: "tween",              // Explicitly set the animation type
        }}
          style={{
            willChange: "transform",    // Hint to browser to optimize for animation
            backfaceVisibility: "hidden", // Prevent flickering in some browsers 
          }}
          className='loading_digit_5'>80</motion.div>
        <motion.div initial={{ y: 100, x:-50 }}
        animate={{ y: -400 }}
        exit={{ y: -200 }}
        transition={{
          duration: 9,
          delay: 5.4,
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for extra smoothness
          type: "tween",              // Explicitly set the animation type
        }}
          style={{
            willChange: "transform",    // Hint to browser to optimize for animation
            backfaceVisibility: "hidden", // Prevent flickering in some browsers 
          }}
          className='loading_digit_6'>100</motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Preloader
