import React from 'react'
import { motion } from 'framer-motion'
import './preloaderleftext.scss'

const PreloaderLeftText = () => {
  return (
    <div>
          <div className='preloader_dripmint_text_container'>
              <motion.span
                  initial={{ y: -30 }}
                  animate={{y:5}}

                  transition={{
                      duration: 0.3,
                      delay: 0.5,
                      //   ease: [0.32, 0.72, 0, 1], 
                      ease: [0.05, 0.9, 0.1, 1.0],  // Modified cubic bezier for faster start, smoother finish
                  }}
                  className='preloader_dripmint_text'>DripMint</motion.span>
        </div>
    </div>
  )
}

export default PreloaderLeftText
