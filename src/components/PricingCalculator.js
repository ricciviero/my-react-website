import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion'

const PricingCalculator = () => {
    // Initialize Formspree
    const [state, handleFormspreeSubmit] = useForm('xzzzgwbd');

    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Handle both local state and Formspree submission
        console.log('Form submitted:', formData)
        await handleFormspreeSubmit(e)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

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
    }

    // Show success message when form is submitted
    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl mx-auto px-4 py-12"
            >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Success icon/checkmark */}
                    <div className="mb-6">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Success message */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Thank you.
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        I've received your project details and will get back to you soon.
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-50 rounded-full opacity-50" />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32 h-32 bg-green-50 rounded-full opacity-50" />

                    {/* Return button */}
                    <button
                        onClick={() => {
                            setFormData({
                                companyName: '',
                                email: '',
                                projectType: '',
                                budget: '',
                                timeline: '',
                                description: ''
                            })
                            window.location.reload()
                        }}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-200 group"
                    >
                        <svg
                            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Submit Another Project
                    </button>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-2xl mx-auto px-4 py-12"
        >
            <div className="space-y-6">
                <motion.div
                    variants={itemVariants}
                    className="text-center space-y-2"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Project Builder 🛠️
                    </h1>
                    <p className="text-gray-500">
                        Let's build your project together
                    </p>
                    <p className="text-sm text-gray-400">
                        Fields marked with <span className="text-red-500">*</span> are required
                    </p>
                </motion.div>

                <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
                >
                    <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                    >
                        <label
                            htmlFor="companyName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Your Name/Company Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        />
                        <ValidationError
                            prefix="Company Name"
                            field="companyName"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                        />
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                        />
                        <label
                            htmlFor="projectType"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Type <span className="text-red-500">*</span>
                        </label>


                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        >
                            <option value="">Select project type *</option>
                            <option value="landing-page"> Landing Page</option>
                            <option value="website">Complete Website</option>
                            <option value="web-app">Web App</option>
                            <option value="mobile">Mobile App</option>
                        </select>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                    >
                        <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Budget Range <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        >
                            <option value="">Select budget range *</option>
                            <option value="mini"> €500 - €5.000</option>
                            <option value="small">€5.000 - €10.000</option>
                            <option value="medium">€10.000 - €25.000</option>
                            <option value="large">€25.000 - €50.000</option>
                            <option value="enterprise">€50.000+</option>
                        </select>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                    >
                        <label
                            htmlFor="timeline"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Timeline <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        >
                            <option value="">Select timeline *</option>
                            <option value="urgent">Less than 1 month</option>
                            <option value="normal">1-3 months</option>
                            <option value="relaxed">3-6 months</option>
                            <option value="flexible">6+ months</option>
                        </select>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                    >
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400 resize-none"
                        />
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {state.submitting ? 'Sending...' : 'Send'}
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default PricingCalculator