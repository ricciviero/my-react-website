import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <button
            className="
                inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-green-500 rounded-full hover:bg-green-600
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 ease-in-out shadow-md
                "
            onClick={() => {
                window.open(
                    "https://wa.me/393791100715",
                    "_blank",
                    "noopener,noreferrer"
                );
            }}
        >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            <span>Text me</span>
        </button>
    );
};

export default WhatsAppButton;