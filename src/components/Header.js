import React from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import Button from './Button';
import WhatsAppButton from './WhatsappButton';
import SocialLinks from './SocialLinks';

export default function Header({ riccardoData }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto flex flex-col items-center text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="mb-8"
                    >
                        <img src={logo} alt="logo" className="w-24 h-24 rounded-full border-2 border-white/10 shadow-2xl" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4 mb-8">
                        <div className="flex items-center justify-center gap-3">
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Hi, I'm {riccardoData.name}
                            </h1>
                            <motion.span
                                animate={{ rotate: [0, 15, -15, 15, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
                                className="text-4xl"
                            >
                                👋
                            </motion.span>
                        </div>

                        <h2 className="text-lg md:text-xl font-light text-white/80">
                            Front-End Developer, React & Next.js Specialist
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <WhatsAppButton />
                        <Button
                            buttonText="Download CV"
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 transition-all duration-300 py-2.5 px-6 rounded-full font-medium text-sm tracking-wide"
                        />
                        <Button
                            buttonText="Schedule Call"
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 transition-all duration-300 py-2.5 px-6 rounded-full font-medium text-sm tracking-wide"
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8"
                    >
                        <SocialLinks className="flex gap-6" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.header>
    );
}