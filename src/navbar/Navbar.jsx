import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Spiral as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../utils/globalContext';

const Navbar = () => {
  const { preloaderDone } = useGlobalContext();
    const [isOpen, setOpen] = useState(false);
    // State to control when animations should start (after sidebar opens)
    const [animateItems, setAnimateItems] = useState(false);
    
    // This effect manages the timing between sidebar opening and items animating
    useEffect(() => {
        let timeoutId;
        
        if (isOpen) {
            // Wait for sidebar to open before starting list animations
            timeoutId = setTimeout(() => {
                setAnimateItems(true);
            }, 600); // Matches your sidebar transition time (adjust if needed)
        } else {
            // Reset animation state when closing
            setAnimateItems(false);
        }
        
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isOpen]);
    
    // Animation variants for list container
    const listContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1, // Time between each child animating
                delayChildren: 0.2,   // Initial delay before first item
            }
        }
    };
    
    // Animation variants for individual list items
    const listItemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
        
    };

    return (
        <div className="navbar_container">
            <nav>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={preloaderDone ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="nav_title_text">
                    DripMint
                </motion.div>
                
                <div className="hamburger-menu">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>
            
            <div className={isOpen ? "sidebar_container_active" : "sidebar_container_inactive"}>
                <motion.ul
                    variants={listContainerVariants}
                    initial="hidden"
                    animate={animateItems ? "visible" : "hidden"}
                >
                    <motion.li variants={listItemVariants}>
                        Home
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        How It Works
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        Features
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                       FAQs
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        Whitelist
                    </motion.li>
                </motion.ul>

          <div className='my_nav_info'>
            <span>DripMint Inc. 2025</span>
            <span>Built by Niyi</span>
            <span>Twitter</span>
            <span>Telegram</span>
          </div>
            </div>
        </div>
    );
};

export default Navbar;