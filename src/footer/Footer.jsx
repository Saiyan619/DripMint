import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import './footer.scss'
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false, amount: 0.8});
  const letters = ["D", "R", "I", "P", "M", "I", "N", "T"];
  return (
    <div className='footer_container'>
      <button className='buy_button'>START MINTING</button>
        <div ref={ref} className='footer_text_wrapper'>
      {letters.map((letter, index) => {
        return (
          <motion.div
            initial={{ y: "120%" }}
          animate={isInView ? { y: 0 } : { y: "120%" }}
          transition={{ delay: .1+index*0.03, duration: 0.5, ease: "easeOut" }} key={index} className='footer_letter_container'>
        <h3>{letter}</h3>
      </motion.div>
       )
     })}
    </div>
  </div>
  )
}

export default Footer