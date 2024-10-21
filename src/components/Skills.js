export default function Skills({ skillsData }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12">
                    Skills <span className="inline-block">👨‍💻</span>
                </h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-800"
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}