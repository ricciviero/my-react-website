import { motion } from 'framer-motion';


const Footer = () => {
    const footerVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.footer
            className="py-8 px-6 mt-28 mb-8 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo e Descrizione */}
                <div className="mb-6 flex items-center justify-center">
                    <h3 className="text-2xl font-bold">Riccardo Civiero</h3>
                </div>
                <p className="text-sm">
                    Partita IVA: 03241840598
                    <br></br>
                    Codice Fiscale: CVRRCR98D18E472Y
                    <br></br>
                    Email: riccardo@riccardociviero.com
                </p>



                {/* Divider */}
                <div className="border-t border-gray-800 mt-6 pt-4 text-sm">
                    © {new Date().getFullYear()} All rights reserved.{" "}

                    <p className="text-sm">
                        Made with ❤️ by me
                    </p>

                    <a
                        href="/privacy"
                        className="text-blue-500 hover:text-blue-600"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;