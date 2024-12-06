import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ projectsData }) {
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

    const projectVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    const techBadgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
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
                    Some Projects 🚀
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
                >
                    {projectsData.map((proj, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden"
                        >
                            <div className="p-8">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2"
                                >
                                    {proj.name}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 mb-6 h-24 overflow-y-auto"
                                >
                                    {proj.description}
                                </motion.p>

                                <motion.div
                                    variants={containerVariants}
                                    className="flex flex-wrap gap-2 mb-6"
                                >
                                    {proj.tech.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            variants={techBadgeVariants}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-xs font-medium shadow-sm"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <div className="flex space-x-4">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={proj.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold text-center transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md"
                                    >
                                        Visit Website
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-12 h-12 bg-gray-200 text-gray-800 rounded-full transition-all duration-300 hover:bg-gray-300 hover:shadow-md"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}