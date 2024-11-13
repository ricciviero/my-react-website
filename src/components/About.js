import React from 'react';

export default function About({ riccardoData }) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
                        About me 🫨
                        <span className="absolute bottom-0 left-0 w-full h-1 transform -translate-y-2"></span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed px-4 md:px-0">
                        {riccardoData.description}
                    </p>
                </div>
            </div>
        </section>
    );
}