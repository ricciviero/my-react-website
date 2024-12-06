import React from 'react';
import { motion } from 'framer-motion';

export default function Experience({ experienceData }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
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
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 relative inline-block w-full text-center"
                >
                    Work Experience 🚀

                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    className="max-w-5xl mx-auto"
                >
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="mb-16 relative"
                        >
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-8 top-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-600 transform -translate-x-1/2"
                            />

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-white rounded-2xl shadow-xl p-8 ml-16 relative transition-all duration-300 hover:shadow-2xl"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute left-0 top-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {experience.role} <span className="text-purple-600">@</span> {experience.company}
                                </h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-lg">{experience.city}, {experience.country}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-lg">{experience.startDate} - {experience.endDate}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}