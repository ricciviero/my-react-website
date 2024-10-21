export default function Projects({ projectsData }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12">
                    Projects 🚀
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((proj, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-2">{proj.name}</h2>
                                <p className="text-gray-600 mb-4">{proj.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={proj.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-orange-600 text-white rounded-xl"
                                    >
                                        Website
                                    </a>
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-orange-600 text-white rounded-xl"
                                    >
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}