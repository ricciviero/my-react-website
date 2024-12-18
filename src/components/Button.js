import React from 'react';

export default function Button({ buttonText, className = '' }) {
    function sendMail() {
        window.open('mailto:riccardo@riccardociviero.com');
    }

    function downloadCV() {
        window.open('https://drive.google.com/file/d/1DIiNHqTWypWC7M87ogN19I372Ddp8pKy/view?usp=sharing');
    }

    function bookMeeting() {
        window.open('https://cal.com/ricciviero/30min');
    }

    return (
        <button
            type="button"

            onClick=
            {
                buttonText === 'Send me an Email 🤝'
                    ? sendMail
                    : buttonText === 'Download my CV 📄'
                        ? downloadCV
                        : bookMeeting
            }

            className=
            {
                `
                relative overflow-hidden group
                px-6 py-3 rounded-full
                bg-white
                text-black font-semibold text-sm
                transition-all duration-300 ease-in-out
                transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50
                ${className}
            `
            }
        >
            <span className="relative z-10">{buttonText}</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </span>
        </button>
    );
}