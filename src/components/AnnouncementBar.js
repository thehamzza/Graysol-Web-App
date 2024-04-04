import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementBar = () => {
    const scrollDuration = 25;

    const tickerVariants = {
        animate: {
            x: ['100%', '-100%'],
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

    const announcementStyle = {
        overflow: 'hidden', 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'black', 
        color: 'white', 
        textAlign: 'center', 
        zIndex: 9999,
        padding: '4px 0',
        fontSize: '16px',
        '@media (max-width: 768px)': {
            fontSize: '4px',
        },
    };

    const motionDivStyle = {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        willChange: 'transform',
        whiteSpace: 'nowrap',
    };

    return (
        <div style={announcementStyle}>
            <motion.div
                style={motionDivStyle}
                variants={tickerVariants}
                animate="animate"
            >
                We are updating our website with new features and information. Stay tuned.
            </motion.div>
        </div>
    );
};

export default AnnouncementBar;
