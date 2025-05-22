import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import './sectionone.scss'
import { Coolshape } from "coolshapes-react";
import { Star } from "coolshapes-react";

const SectionOne = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.8 });
  return (
    <div className='section_one_container'>
<div className="text-mask-container">
  <div ref={ref} className="text-mask-wrapper">
      <motion.h1 
        className="text-6xl font-bold"
        initial={{ y: "100%" }}
        animate={{ y: isInView ? 0 : "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        How It Works
      </motion.h1>

  </div>
</div>

          <div>
              <div className='card_container'>
              <div class="card1">
                <div className='img1_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div> 
                    
                      <div className='img2_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div>   
                    
                      <div className='img3_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div>   
                           
                      <div className='card_content_container'>
                          <div className='card1_content'>
                              <h2>STEP 1</h2>

                              <div className='card1_content_main_container'>
                                    
                              <div className='card1_content_text1_container'>
                                  <span>
                                    Uplaod Your Artwork
                                  </span>
                                  <p>
                                      Upload your original artwork to DripMint whether its Photography, digital design, or illustrations, its yours to own on-chain
                                  </p>
                              </div>

                              <div className='card1_content_img_container'>
                                  <img src="./original-2cd98136c561ef9e74c1810e95017475.webp" alt="img" />
                              </div>
                           </div>

                          </div>
                      </div>
                  </div>


          <div class="card2">
          <div className='img1_card2_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div> 
                    
                      <div className='img2_card2_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div>   
                    
                      <div className='img3_card2_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div>   
                           
                      <div className='card_content_container'>
                          <div className='card1_content'>
                              <h2>STEP 2</h2>

                              <div className='card1_content_main_container'>
                                    
                              <div className='card1_content_text1_container'>
                                  <span>
                                    Mint Your NFT with NiyiToken (NTK)
                                  </span>
                                  <p>
                                      Use NTK to mint your art directly on-chain, securing ownership and authenticity in seconds.
                                  </p>
                              </div>

                              <div className='card1_content_img_container'>
                                  <img src="./original-217e9072b56cdda8160ad5f4a5b2ff6d.webp" alt="img" />
                              </div>
                           </div>

                          </div>
                      </div>
  </div>
  <div class="card3">
  <div className='img1_card3_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div> 
                    
                      <div className='img2_card3_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div>   
                    
                      <div className='img3_card3_container'>
                    <img src="./CS_Star_8.png" alt="icon" />
                    </div>   
                           
                      <div className='card_content_container'>
                          <div className='card1_content'>
                              <h2>STEP 3</h2>

                              <div className='card1_content_main_container'>
                                    
                              <div className='card1_content_text1_container'>
                                  <span>
                                    Instantly list on Opensea
                                  </span>
                    <p>
                      Once minted, your NFT is automatically listed on Opensea, ready for collectors to discover and purchase.   
                                  </p>
                              </div>

                              <div className='card3_content_img_container'>
                                  <img src="./original-a4f1141a356c8be7e3decc35d4b344ae.webp" alt="img" />
                              </div>
                           </div>

                          </div>
                      </div>
  </div>
              </div>
</div>

    </div>
  )
}

export default SectionOne
