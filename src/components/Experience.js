export default function Experience({ experienceData }) {
    return (
        <section className="container mx-auto px-4 py-16">

            <h1 className="text-3xl font-bold text-center mb-12"> Work experience 🚀</h1>

            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                {experienceData.map((experience, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-black mb-2">
                                {experience.role} at {experience.company}
                            </h2>
                            <div className="flex items-center text-gray-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-lg">{experience.city}, {experience.country}</h3>
                            </div>
                            <div className="flex items-center text-gray-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <h4 className="text-lg">{experience.startDate} - {experience.endDate}</h4>
                            </div>
                            <p className="text-gray-700 mb-4">{experience.description}</p>
                        </div>
                        <div className="bg-gray-100 px-6 py-4">
                            <div className="flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">Work experience</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}