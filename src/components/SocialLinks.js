import React from 'react';
import { objSocialLinks } from '../back-end/riccardo';

export default function SocialLinks() {
    const socialData = objSocialLinks;

    return (
        <div className="flex justify-center space-x-4 py-6">
            {socialData.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-3 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    aria-label={`Visit ${social.name} profile`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                    </div>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2 whitespace-nowrap">
                        {social.name}
                    </span>
                </a>
            ))}
        </div>
    );
}