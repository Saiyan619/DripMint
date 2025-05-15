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
            <motion.span
              className='main_name_text_1'
              initial={{ y: "120%" }}
              animate={{ y: preloaderDone ? "0" : "120%" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
    
    </div>
   
  )
}

export default Header

