export default function Button({ buttonText }) {

    function sendMail() {
        window.open('mailto:riccardo@riccardociviero.com');
    }

    return (
        <div className="flex justify-center">
            <button
                type="button"
                buttonText={buttonText}
                onClick={sendMail}
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200  focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-2xl
                    text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                {buttonText}
            </button>
        </div>
    );
}