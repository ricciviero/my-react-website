import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.svg';
import Button from './Button';
import WhatsAppButton from './WhatsappButton';
import SocialLinks from './SocialLinks';

export default function Header({ riccardoData }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showEnterButton, setShowEnterButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Show enter button shortly after loading completes
            setTimeout(() => setShowEnterButton(true), 1000);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Simple loading animation variant
    const loadingVariants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut'
            }
        }
    };

    // Enhanced animation variants for header reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                when: 'beforeChildren'
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    const logoVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            rotate: -180
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 150,
                duration: 0.8
            }
        }
    };

    const buttonContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    const enterButtonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center z-50"
                    >
                        <motion.div
                            variants={loadingVariants}
                            animate="animate"
                            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white min-h-screen flex items-center justify-center relative"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center text-center"
                    >
                        <motion.div
                            variants={logoVariants}
                            className="mb-6"
                        >
                            <img
                                src={logo}
                                alt="logo"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                            />
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-row items-center text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                Hi, I'm {riccardoData.name}
                            </h1>
                            <motion.p
                                animate={{
                                    rotate: [0, 15, -15, 15, 0],
                                    transition: {
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }
                                }}
                                className="text-4xl md:text-5xl font-bold mb-2 ml-2"
                            >
                                👋
                            </motion.p>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-xl md:text-2xl font-light mb-6"
                        >
                            Front-End Developer, React & Next.js Specialist.<br />
                            Building Responsive, Scalable, and User-Friendly Web App.
                        </motion.h2>

                        <motion.div
                            variants={buttonContainerVariants}
                            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <motion.div variants={buttonVariants}>
                                <WhatsAppButton />
                            </motion.div>

                            <motion.div variants={buttonVariants}>
                                <Button
                                    buttonText="Download my CV 📄"
                                    className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                                />
                            </motion.div>

                            <motion.div variants={buttonVariants}>
                                <Button
                                    buttonText="Book a call 📅"
                                    className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                                />
                            </motion.div>

                            <motion.div variants={buttonVariants}>
                                <SocialLinks className="flex space-x-4" />
                            </motion.div>
                        </motion.div>

                        <AnimatePresence>
                            {showEnterButton && (
                                <motion.button
                                    variants={enterButtonVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    whileTap="tap"
                                    exit="hidden"
                                    className="mt-16 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg backdrop-blur-sm bg-opacity-90 flex items-center gap-2 group relative"
                                >
                                    <span className="relative z-10">Enter Site</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="inline-block relative z-10"
                                    >
                                        →
                                    </motion.span>
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-white opacity-50"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.header>
        </>
    );
}