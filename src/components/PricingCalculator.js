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
        description: '',
        privacyAccepted: false
    })

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData(prev => ({
            ...prev,
            [e.target.name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.privacyAccepted) {
            alert('Please accept the privacy policy to continue')
            return
        }
        console.log('Form submitted:', formData)
        await handleFormspreeSubmit(e)
    }

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99] // Custom easing
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    // Success animation variants
    const successVariants = {
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
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.1
            }
        }
    }

    const successChildVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    // Form field focus animation
    const focusAnimation = {
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    }

    // Show success message when form is submitted
    if (state.succeeded) {
        return (
            <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-2xl mx-auto px-4 py-12"
            >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
                    <motion.div
                        variants={successChildVariants}
                        className="mb-6"
                    >
                        {/* Success icon/checkmark */}
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
                    </motion.div>

                    {/* Success message */}
                    <motion.h2
                        variants={successChildVariants}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Thank you.
                    </motion.h2>
                    <motion.p
                        variants={successChildVariants}
                        className="text-gray-600 text-lg mb-8"
                    >
                        I've received your project details and will get back to you soon.
                    </motion.p>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-50 rounded-full opacity-50" />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32 h-32 bg-green-50 rounded-full opacity-50" />

                    {/* Return button */}
                    <motion.button
                        variants={successChildVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
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
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold text-center transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md"
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
                    </motion.button>
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
                        whileFocus={focusAnimation}
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

                    <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                    >
                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                id="privacyAccepted"
                                name="privacyAccepted"
                                checked={formData.privacyAccepted}
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                required
                            />
                            <label
                                htmlFor="privacyAccepted"
                                className="text-sm text-gray-600"
                            >
                                I accept the{' '}
                                <a
                                    href="/privacy"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        window.location.href = '/privacy'
                                    }}
                                    className="text-indigo-600 hover:text-indigo-800 underline"
                                >
                                    privacy policy
                                </a>
                                <span className="text-red-500">*</span>
                            </label>
                        </div>
                        <ValidationError
                            prefix="Privacy Policy"
                            field="privacyAccepted"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                        />
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={state.submitting}
                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold text-center transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md"
                    >
                        {state.submitting ? (
                            <motion.span
                                animate={{
                                    rotate: 360,
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                            >
                                ⏳
                            </motion.span>
                        ) : 'Send'}
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default PricingCalculator