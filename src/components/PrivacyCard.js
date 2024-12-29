const PrivacySection = ({ title, children }) => (
    <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>{title}</h2>
        <div className='text-gray-600 dark:text-gray-300 space-y-3'>
            {children}
        </div>
    </div>
);

const PrivacyCard = () => {
    return (
        <div className='max-w-4xl mx-auto px-4 py-12'>
            {/* Header */}
            <div className='text-center mb-12'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                    Privacy Policy
                </h1>
                <p className='text-gray-600 dark:text-gray-300'>
                    Effective Date: 29/12/2024
                </p>
            </div>

            {/* Introduction */}
            <div className='prose dark:prose-invert max-w-none mb-12 text-gray-600 dark:text-gray-300'>
                <p>
                    Thank you for visiting my personal website. I am committed to protecting your privacy
                    and ensuring that your personal information is handled responsibly. This Privacy Policy
                    outlines how your data is collected, used, and protected when you interact with my website.
                </p>
            </div>

            {/* Data Controller */}
            <PrivacySection title="Data Controller">
                <p>The data controller responsible for your personal data is:</p>
                <div className='bg-gray-50 dark:bg-gray-800 p-4 rounded-lg'>
                    <p className='font-medium'>Riccardo Civiero</p>
                    <p>Email: riccardo@riccardociviero.com</p>
                </div>
            </PrivacySection>

            {/* Information Collected */}
            <PrivacySection title="Information Collected">
                <div className='space-y-6'>
                    <div>
                        <h3 className='text-lg font-medium mb-2 text-gray-700 dark:text-gray-100'>
                            Data You Provide
                        </h3>
                        <div className='bg-gray-50 dark:bg-gray-800 p-4 rounded-lg'>
                            <p className='mb-2'>When you fill out the contact form, I collect:</p>
                            <ul className='list-disc list-inside space-y-1 ml-4'>
                                <li>Name or Company Name (required)</li>
                                <li>Email Address (required)</li>
                                <li>Type of Project (required)</li>
                                <li>Timeline (required)</li>
                                <li>Budget (required)</li>
                                <li>Project Description (optional)</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium mb-2 text-gray-700 dark:text-gray-100'>
                            Data Collected Automatically
                        </h3>
                        <p>
                            I use Vercel Analytics to track page views on my website.
                            This data is anonymized and does not identify individual users.
                        </p>
                    </div>
                </div>
            </PrivacySection>

            {/* Third-Party Services */}
            <PrivacySection title="Third-Party Services">
                <div className='grid md:grid-cols-3 gap-4'>
                    {[
                        { name: 'WhatsApp', desc: 'When you use the WhatsApp button' },
                        { name: 'Google Drive', desc: 'When you download my CV' },
                        { name: 'Cal.com', desc: 'When you book a call' }
                    ].map((service) => (
                        <div
                            key={service.name}
                            className='bg-gray-50 dark:bg-gray-800 p-4 rounded-lg'
                        >
                            <h4 className='font-medium mb-2 text-gray-700 dark:text-gray-100'>
                                {service.name}
                            </h4>
                            <p className='text-sm'>{service.desc}, your interaction is subject to {service.name}'s privacy policy.</p>
                        </div>
                    ))}
                </div>
            </PrivacySection>

            {/* Contact Section */}
            <div className='mt-12 text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg'>
                <h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
                    Questions or Concerns?
                </h2>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    If you have any questions about this Privacy Policy, please contact me at:
                </p>
                <a
                    href='mailto:riccardo@riccardociviero.com'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                >
                    riccardo@riccardociviero.com
                </a>
            </div>
        </div>
    );
};

export default PrivacyCard;