import React from 'react';

export default function Experience({ experienceData }) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 relative inline-block w-full text-center">
                    Work Experience 🚀
                    <span className="absolute bottom-0 left-1/2 w-24 h-1 transform -translate-x-1/2 -translate-y-2"></span>
                </h2>
                <div className="max-w-5xl mx-auto">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="mb-16 relative">
                            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-600 transform -translate-x-1/2"></div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 ml-16 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <div className="absolute left-0 top-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}