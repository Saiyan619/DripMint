import React from 'react'
import { motion } from 'framer-motion'
import './preloadertext.scss'

const PreloaderText = () => {
  return (
      <div className='preloader_text_container'>
          
          <div className='preloader_text_1_container'>
              <motion.span
                  initial={{ y: -25 }}
                  animate={{y:3}}

                  transition={{
                      duration: 0.3,
                      delay: 0.7,
                      ease: [0.32, 0.72, 0, 1], 
                  }}
                  style={{
                    willChange: "transform",    // Hint to browser to optimize for animation
                    backfaceVisibility: "hidden", // Prevent flickering in some browsers
                   }}
                  className='preloader_text_1'>
          Not A Blockchain Artist ? 
          </motion.span> 
          </div>

          <div className='preloader_text_2_container'>
              <motion.span
                   initial={{ y: -30 }}
                   animate={{y:1}}
                   exit={{y:3}}
 
                   transition={{
                       duration: 0.5,
                       delay: 0.8,
                       ease: [0.32, 0.72, 0, 1], 
                  }}
                  style={{
                    willChange: "transform",    // Hint to browser to optimize for animation
                    backfaceVisibility: "hidden", // Prevent flickering in some browsers
                   }}
                  className='preloader_text_2'>
          Your About To Become One
          </motion.span>
          </div>
          
    </div>
  )
}

export default PreloaderText
