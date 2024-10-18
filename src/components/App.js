// importazione componenti
import Header from './Header.js';
import About from './About.js';

// importazione costanti e variabili
import { riccardo } from '../back-end/riccardo';

// componente app
export default function App() {

  const riccardoData = riccardo[0];


  return (
    <>
      <Header
        riccardoData={riccardoData}
      />
      <About
        riccardoData={riccardoData}
      />
    </>
  );
}

