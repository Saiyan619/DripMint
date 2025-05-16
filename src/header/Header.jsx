import React from 'react'
import { motion } from 'framer-motion'
import './header.scss'
import { useGlobalContext } from '../utils/globalContext';
import Navbar from '../navbar/Navbar';

const Header = () => {
    const { preloaderDone, setPreloaderDone } = useGlobalContext();
  
  return (
    <div className='header_container'>
    <div className='header'>
                  <Navbar />
      <div className='main_name_text_container'>
        {["D", "R", "I", "P", "M", "I", "N", "T"].map((letter, index) => (
          <span key={index} className='letter_wrapper'>
            <motion.div
              className='main_name_text_1'
              initial={{ y: "120%" }}
              animate={{ y: preloaderDone ? "0" : "120%" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              {letter}
            </motion.div>
          </span>
        ))}
        
 
        
        </div>
        <div className='sub_text_container'>
          <span>Mint. Own. Earn <br /> Welcome to the world of Drippy art</span>
          <button className='header_btn'>Start Minting</button>
        </div>
    
      </div>

      <motion.div
       animate={{
         y: [0, -10, 0], // Moves up then down
       }}
       transition={{
         duration: 3,
         repeat: Infinity,
         ease: "easeInOut",
        }}
        className='img_1_container'>
        <img src="./original-217e9072b56cdda8160ad5f4a5b2ff6d.webp" alt="nfts" />
      </motion.div>

      <motion.div
       animate={{
         y: [0, -10, 0], // Moves up then down
       }}
       transition={{
         duration: 3,
         repeat: Infinity,
         ease: "easeInOut",
        }} className='img_2_container'>
        <img src="./original-a4f1141a356c8be7e3decc35d4b344ae.webp" alt="nfts" />
        </motion.div>

        <motion.div
       animate={{
         y: [0, -10, 0], // Moves up then down
       }}
       transition={{
         duration: 3,
         repeat: Infinity,
         ease: "easeInOut",
        }} className='img_3_container'>
        <img src="./original-2cd98136c561ef9e74c1810e95017475.webp" alt="nfts" />
        </motion.div>
    
    </div>
   
  )
}

export default Header

