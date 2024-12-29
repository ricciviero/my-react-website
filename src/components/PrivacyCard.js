const PrivacySection = ({ title, children }) => (
    <div className='mb-12 backdrop-blur-sm bg-[#111]/90 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-xl'>
        <h2 className='text-2xl font-bold mb-6 text-gray-100 flex items-center gap-3'>
            <div className='h-8 w-1 bg-blue-500 rounded-full animate-pulse' />
            {title}
        </h2>
        <div className='text-gray-300 space-y-4'>
            {children}
        </div>
    </div>
);

const PrivacyCard = () => {
    return (
        <div className='max-w-5xl mx-auto px-4 py-16 relative'>
            {/* Decorative elements */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 animate-pulse' />

            {/* Header */}
            <div className='text-center mb-16 relative'>
                <span className='inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 animate-bounce'>
                    Last Updated: December 29, 2024
                </span>
                <h1 className='text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight'>
                    Privacy Policy
                </h1>
                <p className=' max-w-2xl mx-auto text-lg leading-relaxed text-black'>
                    Thank you for visiting my personal website. I am committed to protecting your privacy
                    and ensuring that your personal information is handled responsibly.
                </p>
            </div>

            {/* Data Controller */}
            <PrivacySection title="Data Controller">
                <div className='bg-[#0A0A0A]/90 p-6 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.02]'>
                    <p className='text-xl font-semibold mb-2 text-gray-100'>Riccardo Civiero</p>
                    <p className='flex items-center gap-2 text-gray-300'>
                        <svg className='w-5 h-5 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                        riccardo@riccardociviero.com
                    </p>
                </div>
            </PrivacySection>

            {/* Information Collected */}
            <PrivacySection title="Information Collected">
                <div className='space-y-8'>
                    <div>
                        <h3 className='text-xl font-semibold mb-4 text-gray-100'>
                            Data You Provide
                        </h3>
                        <div className='bg-[#0A0A0A]/90 p-6 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.02]'>
                            <p className='mb-4 text-gray-300'>When you fill out the contact form, I collect:</p>
                            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {[
                                    'Name or Company Name',
                                    'Email Address',
                                    'Type of Project',
                                    'Timeline',
                                    'Budget',
                                    'Project Description (optional)'
                                ].map(item => (
                                    <li key={item} className='flex items-center gap-3 text-gray-300 bg-[#111]/80 p-3 rounded-lg'>
                                        <svg className='w-5 h-5 text-emerald-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-4 text-gray-100'>
                            Data Collected Automatically
                        </h3>
                        <div className='bg-[#0A0A0A]/90 p-6 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.02]'>
                            <p className='flex items-center gap-3 text-gray-300'>
                                <svg className='w-5 h-5 text-blue-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                                </svg>
                                I use Vercel Analytics to track page views on my website.
                                This data is anonymized and does not identify individual users.
                            </p>
                        </div>
                    </div>
                </div>
            </PrivacySection>

            {/* Third-Party Services */}
            <PrivacySection title="Third-Party Services">
                <div className='grid md:grid-cols-3 gap-6'>
                    {[
                        { name: 'WhatsApp', desc: 'When you use the WhatsApp button', icon: '💬' },
                        { name: 'Google Drive', desc: 'When you download my CV', icon: '📄' },
                        { name: 'Cal.com', desc: 'When you book a call', icon: '📅' }
                    ].map((service) => (
                        <div
                            key={service.name}
                            className='bg-[#0A0A0A]/90 p-6 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.02] hover:border-gray-700'
                        >
                            <span className='text-2xl mb-4 block'>{service.icon}</span>
                            <h4 className='font-semibold mb-2 text-gray-100'>
                                {service.name}
                            </h4>
                            <p className='text-sm text-gray-300'>{service.desc}, your interaction is subject to {service.name}'s privacy policy.</p>
                        </div>
                    ))}
                </div>
            </PrivacySection>

            {/* Contact Section */}
            <div className='mt-16 text-center'>
                <div className='bg-[#0A0A0A]/90 p-8 rounded-2xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.02]'>
                    <h2 className='text-2xl font-bold mb-4 text-gray-100'>
                        Questions or Concerns?
                    </h2>
                    <p className='text-gray-300 mb-6'>
                        If you have any questions about this Privacy Policy, please contact me at:
                    </p>
                    <a
                        href='mailto:riccardo@riccardociviero.com'
                        className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105'
                    >
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                        riccardo@riccardociviero.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PrivacyCard;