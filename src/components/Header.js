import React from 'react';
import logo from './logo.svg';
import Button from "./Button";
import SocialLinks from './SocialLinks';

export default function Header({ riccardoData }) {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 transition-transform duration-300 hover:scale-110">
                        <img src={logo} alt="logo" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
                    </div>
                    <div className="flex flex-row items-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm {riccardoData.name}</h1>
                        <p className="text-4xl md:text-5xl font-bold mb-2">👋</p>
                    </div >
                    <h2 className="text-xl md:text-2xl font-light mb-6">{riccardoData.miniDescription}</h2>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button
                            buttonText="Send me an Email 🤝"
                            className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                        />
                        <Button
                            buttonText="Download my CV 📄"
                            className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold text-lg shadow-md"
                        />
                        <SocialLinks className="flex space-x-4" />
                    </div>
                </div>
            </div>
        </header>
    );
}