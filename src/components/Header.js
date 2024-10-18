// importazione elementi vari
import logo from './logo.svg';

// componente header
export default function Header({ riccardoData }) {

    // estrazione dati dall'array di oggetti Riccardo


    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="header-title">
                    <h1> Hi, I'm {riccardoData.name} 👋 </h1>
                    <h2> {riccardoData.miniDescription} </h2>
                </div>

            </header>
        </>
    );
}