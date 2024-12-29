import { useState } from 'react'

const PricingCalculator = () => {
    const [formData, setFormData] = useState({
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

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-12">
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Project Calculator
                    </h1>
                    <p className="text-gray-500">
                        Get an instant estimate for your project
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
                >
                    {/* Project Type */}
                    <div className="space-y-2">
                        <label
                            htmlFor="projectType"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Type
                        </label>
                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        >
                            <option value="">Select project type</option>
                            <option value="website">Website Development</option>
                            <option value="mobile">Mobile App</option>
                            <option value="desktop">Desktop Application</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                        <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Budget Range
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        >
                            <option value="">Select budget range</option>
                            <option value="small">$5,000 - $10,000</option>
                            <option value="medium">$10,000 - $25,000</option>
                            <option value="large">$25,000 - $50,000</option>
                            <option value="enterprise">$50,000+</option>
                        </select>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                        <label
                            htmlFor="timeline"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Timeline
                        </label>
                        <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                        >
                            <option value="">Select timeline</option>
                            <option value="urgent">Less than 1 month</option>
                            <option value="normal">1-3 months</option>
                            <option value="relaxed">3-6 months</option>
                            <option value="flexible">6+ months</option>
                        </select>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
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
                            placeholder="Tell us about your project..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Calculate Estimate
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PricingCalculator