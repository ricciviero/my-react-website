// importazione componenti
import Header from './Header.js';
import About from './About.js';
import Experience from './Experience.js';

// importazione costanti e variabili
import { riccardo, workExperience } from '../back-end/riccardo';

// componente app
export default function App() {

  const riccardoData = riccardo[0];
  const experienceData = workExperience;


  return (
    <>
      <Header
        riccardoData={riccardoData}
      />

      <About
        riccardoData={riccardoData}
      />

      <Experience
        experienceData={experienceData}
      />



    </>
  );
}

