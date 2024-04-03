import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementBar = () => {
    const scrollDuration = 25;

    const tickerVariants = {
        animate: {
            x: ['-100%', '100%'],
            transition: {
                x: {
                    duration: scrollDuration, 
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                }
            }
        },
    };

    return (
        <div style={{ overflow: 'hidden', position: 'fixed', top: 0, width: '100%', backgroundColor: 'black', color: 'white', textAlign: 'center', zIndex: 9999 }}>
            <motion.div
                style={{ display: 'flex', flexDirection: 'column', willChange: 'transform' }}
                variants={tickerVariants}
                animate="animate"
            >
                We are updating our website with new features and information. Stay tuned.
            </motion.div>
        </div>
    );
};

export default AnnouncementBar;
