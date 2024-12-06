import React from 'react';
import { motion } from 'framer-motion';

export default function About({ riccardoData }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                when: 'beforeChildren'
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        variants={titleVariants}
                        className="text-3xl md:text-4xl font-bold mb-8 relative inline-block"
                    >
                        About me 🫨

                    </motion.h2>

                    <motion.p
                        variants={textVariants}
                        className="text-lg text-gray-700 leading-relaxed px-4 md:px-0"
                    >
                        {riccardoData.description}
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
}