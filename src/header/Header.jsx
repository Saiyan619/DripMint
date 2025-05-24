import React from 'react'
import { delay, motion } from 'framer-motion'
import './header.scss'
import { useGlobalContext } from '../utils/globalContext';
import Navbar from '../navbar/Navbar';

const Header = () => {
    const { preloaderDone, setPreloaderDone } = useGlobalContext();
  const letters = ["D", "R", "I", "P", "M", "I", "N", "T"];
  return (
    <div className='header_container'>
    <div className='header'>
                  <Navbar />

        <div className='main_name_text_container'>
          <div className='letter_wrapper'>
          {letters.map((letter, index) => {
            return (
              <motion.div initial={{ y:"200"}} animate={{ y: preloaderDone ? "0" : "200%" }} transition={{delay:.1+index*0.05,type:"tween", duration:1}} key={index}>
                <span>{letter}</span>
              </motion.div>
            )
          })}
            </div>

            <div className='sub_text_container'>
          <span>Mint. Own. Earn <br /> Welcome to the world of Drippy art</span>
          <button className='header_btn'>Start Minting</button>
        </div>
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

