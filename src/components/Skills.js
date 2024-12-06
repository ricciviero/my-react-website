import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ skillsData }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 relative inline-block w-full text-center"
                >
                    Skills 👨‍💻

                </motion.h2>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={skillVariants}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { type: 'spring', stiffness: 400 }
                                }}
                                className="group relative bg-white text-purple-600 px-6 py-3 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:shadow-xl hover:bg-purple-600 hover:text-white transform cursor-pointer"
                            >
                                <span className="relative z-10">
                                    <strong>{skill.name}</strong>
                                </span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                                />
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3 bg-purple-200 rounded-full"
                                />
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-indigo-200 rounded-full"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}