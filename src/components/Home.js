// importazione costanti e variabili
import { riccardo, workExperience, skills, objProjects } from '../back-end/riccardo';
import Header from './Header.js';
import About from './About.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import PricingCalculator from './PricingCalculator.js';

import { Analytics } from "@vercel/analytics/react"


// componente app
const Home = () => {

    const riccardoData = riccardo[0];
    const experienceData = workExperience;
    const skillsData = skills;
    const projectsData = objProjects;


    return (
        <>
            <Analytics />
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

            <PricingCalculator />

        </>
    );
}

export default Home;