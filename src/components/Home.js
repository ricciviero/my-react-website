// importazione costanti e variabili
import { riccardo } from '../back-end/riccardo';
import Header from './Header.js';

import { Analytics } from "@vercel/analytics/react"


// componente app
const Home = () => {

    const riccardoData = riccardo[0];


    return (
        <>
            <Analytics />
            <Header
                riccardoData={riccardoData}
            />

        </>
    );
}

export default Home;