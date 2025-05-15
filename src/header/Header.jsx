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
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              {letter}
            </motion.div>
          </span>
        ))}
        
 
        
        </div>
        <div className='sub_text_container'>
          <span>Mint.Own.Earn <br /> Welcome to the world of Drippy art</span>
          <button className='header_btn'>Start Minting</button>
        </div>
    
      </div>
    
    </div>
   
  )
}

export default Header

