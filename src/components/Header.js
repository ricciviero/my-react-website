import React from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import Button from './Button';
import SocialLinks from './SocialLinks';

export default function Header({ riccardoData }) {
    // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="mb-6"
                    >
                        <img src={logo} alt="logo" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row items-center text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm {riccardoData.name}</h1>
                        <motion.p
                            animate={{ rotate: [0, 20, -20, 20, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                            className="text-4xl md:text-5xl font-bold mb-2"
                        >
                            👋
                        </motion.p>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-xl md:text-2xl font-light mb-6"
                    >
                        {riccardoData.miniDescription}
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Button
                            buttonText="Send me an Email 🤝"
                            className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                        />
                        <Button
                            buttonText="Download my CV 📄"
                            className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                        />
                        <Button
                            buttonText="Book a call 📅"
                            className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                        />
                        <SocialLinks className="flex space-x-4" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.header>
    );
}