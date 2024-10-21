// importazione componenti
import Header from './Header.js';
import About from './About.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

// importazione costanti e variabili
import { riccardo, workExperience, skills, objProjects } from '../back-end/riccardo';


// componente app
export default function App() {

  const riccardoData = riccardo[0];
  const experienceData = workExperience;
  const skillsData = skills;
  const projectsData = objProjects;


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

      <Skills
        skillsData={skillsData}
      />

      <Projects
        projectsData={projectsData}
      />



    </>
  );
}

