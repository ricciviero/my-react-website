// importazione elementi vari
import logo from './logo.svg';

// componente header
export default function Header({ riccardoData }) {

    // estrazione dati dall'array di oggetti Riccardo


    return (
        <>
            <header className="flex justify-center items-center p-12 border-b border-red-500 md:flex-col md:text-center">
                <div className="mr-4 border border-blue-800 transition-transform duration-300 hover:scale-105">
                    <img src={logo} alt="logo" className="max-w-[120px] h-auto" />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-black m-0">Hi, I'm {riccardoData.name} 👋</h1>
                    <h2 className="text-lg font-normal text-gray-700 mt-1">{riccardoData.miniDescription}</h2>
                </div>
            </header>
        </>
    );
}