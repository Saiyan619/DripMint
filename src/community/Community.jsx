import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './community.scss'

const Community = () => {
  // Fixed: Using single elements with proper text content
  const words = ['JOIN', 'THE', 'DRIPMINT', 'MOVEMENT']
  const ref = useRef()
  const isInView = useInView(ref, {once: false})
  
  return (
    <div ref={ref} className='community_container'>
      <div className='communtity_hero_text'>
        <div className="masked_heading">
          {words.map((word, index) => (
            <motion.div
              key={index}
              initial={{ y: 200 }}
              animate={isInView ? { y: 0 } : { y: 200 }}
              transition={{ duration: 1, delay: 0.1 + index * 0.1, type: "tween" }}
              className='animated_text'
            >
              <h3>{word}</h3>
            </motion.div>
          ))}
        </div>
        <p>From digital Art to photography, DripMint has empowered Creators to Mint their Art on the BlockChain</p>
      </div>
      <div className='all_img_main_container'>
        <div className='img_container'>
          <img src="./pngwing.com (4).png" alt="social icon" />
        </div>
        <div className='img_container'>
          <img src="./pngwing.com (5).png" alt="social icon" />
        </div>
        <div className='img_container'>
          <img src="./pngwing.com (6).png" alt="social icon" />
        </div>
      </div>
    </div>
  )
}

export default Community