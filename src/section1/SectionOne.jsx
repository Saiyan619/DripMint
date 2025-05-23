import React, { useRef } from 'react'
import { motion, scale, useInView, useScroll, useTransform } from "framer-motion";
import './sectionone.scss'

const SectionOne = () => {
    // Separate refs for each card
    const titleRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    
    // Title animation
    const isInView = useInView(titleRef, { once: false, amount: 0.8 });
    
    // Separate scroll progress and scale transforms for each card since i cant use the same rafe for all of them
    const { scrollYProgress: card1Progress } = useScroll({ 
        target: card1Ref, 
        offset: ["start end", "end start"] 
    });
    const card1Scale = useTransform(card1Progress, [0, 1], [0.8, 1]);
    
    const { scrollYProgress: card2Progress } = useScroll({ 
        target: card2Ref, 
        offset: ["start end", "end start"] 
    });
    const card2Scale = useTransform(card2Progress, [0, 1], [0.8, 1]);
    
    const { scrollYProgress: card3Progress } = useScroll({ 
        target: card3Ref, 
        offset: ["start end", "end start"] 
    });
    const card3Scale = useTransform(card3Progress, [0, 1], [0.8, 1]);
    
    return (
        <div className='section_one_container'>
            <div className="text-mask-container">
                <div ref={titleRef} className="text-mask-wrapper">
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
                    <div className="card1" ref={card1Ref}>
                        <div className='img1_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div> 
                        
                        <div className='img2_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div>   
                        
                        <div className='img3_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div>   
                                
                        <div className='card1_content_container'>
                            <div className='card1_content'>
                                <h2>STEP 1</h2>

                                <div className='card1_content_main_container'>
                                    <div className='card1_content_text_container'>
                                        <span>
                                            Upload Your Artwork
                                        </span>
                                        <p>
                                            Upload your original artwork to DripMint whether its Photography, digital design, or illustrations, its yours to own on-chain
                                        </p>
                                    </div>

                                    <div className='card1_content_img_container'>
                                        <motion.img 
                                            style={{ scale: card1Scale }} 
                                            src="./original-2cd98136c561ef9e74c1810e95017475.webp" 
                                            alt="img" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card2" ref={card2Ref}>
                        <div className='img1_card2_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div> 
                        
                        <div className='img2_card2_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div>   
                        
                        <div className='img3_card2_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div>   
                                
                        <div className='card2_content_container'>
                            <div className='card2_content'>
                                <h2>STEP 2</h2>

                                <div className='card2_content_main_container'>
                                    <div className='card2_content_text_container'>
                                        <span>
                                            Mint Your NFT with NiyiToken (NTK)
                                        </span>
                                        <p>
                                            Use NTK to mint your art directly on-chain, securing ownership and authenticity in seconds.
                                        </p>
                                    </div>

                                    <div className='card2_content_img_container'>
                                        <motion.img 
                                            style={{ scale: card2Scale }} 
                                            src="./original-217e9072b56cdda8160ad5f4a5b2ff6d.webp" 
                                            alt="img" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card3" ref={card3Ref}>
                        <div className='img1_card3_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div> 
                        
                        <div className='img2_card3_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div>   
                        
                        <div className='img3_card3_container'>
                            <img src="./CS_Star_8.png" alt="icon" />
                        </div>   
                                
                        <div className='card3_content_container'>
                            <div className='card3_content'>
                                <h2>STEP 3</h2>

                                <div className='card3_content_main_container'>
                                    <div className='card3_content_text_container'>
                                        <span>
                                            Instantly list on Opensea
                                        </span>
                                        <p>
                                            Once minted, your NFT is automatically listed on Opensea, ready for collectors to discover and purchase.   
                                        </p>
                                    </div>

                                    <div className='card3_content_img_container'>
                                        <motion.img 
                                            style={{ scale: card3Scale }} 
                                            src="./original-a4f1141a356c8be7e3decc35d4b344ae.webp" 
                                            alt="img" 
                                        />
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