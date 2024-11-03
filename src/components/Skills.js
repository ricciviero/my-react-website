import React from 'react';

export default function Skills({ skillsData }) {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 relative inline-block w-full text-center">
                    Skills 👨‍💻
                    <span className="absolute bottom-0 left-1/2 w-24 h-1 transform -translate-x-1/2 -translate-y-2"></span>
                </h2>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative bg-white text-purple-600 px-6 py-3 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:shadow-xl hover:bg-purple-600 hover:text-white transform hover:-translate-y-1 cursor-pointer"
                            >
                                <span className="relative z-10"><strong>{skill.name}</strong></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                                <span className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-indigo-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}