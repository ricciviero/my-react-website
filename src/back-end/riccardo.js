import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// variabili e costanti
export const thisYear = new Date().getFullYear();
export const myYear = 1998;

export const calculateAge = () => {
    return thisYear - myYear;
}

// array di oggetti per tutti i dati
export const riccardo = [
    {
        "name": "Riccardo",
        "surname": "Civiero",
        "age": calculateAge(),
        "city": "Latina",
        "country": "Italy",
        "job": "Front-End Developer",
        "miniDescription": 'Front-End Developer, React & Next.js Specialist. Building Responsive, Scalable, and User-Friendly Web App.',
        "description": 'I’m a 26-year-old passionate about all things tech. As a front-end developer with a strong foundation in React and Next.js, I excel in building high-performance, scalable, and user-focused web applications.',
        "company": "Freelance",
        "email": 'riccardo@riccardociviero.com',
        "phone": '+39 379 1100715',
        "website": 'https://riccardociviero.dev',
        "social": {
            "github": 'https://github.com/ricciviero',
            "linkedin": 'https://www.linkedin.com/in/riccardo-civiero-13b2a312b/',
            "x": 'https://x.com/ricciviero',
        },

    }
];



export const workExperience = [

    {
        "company": "Fast 2 Digital",
        "role": "Front-End Developer",
        "city": "Full-Remote",
        "country": "Italy",
        "startDate": "Jan 2024",
        "endDate": "Present",
        "description": "Led cross-functional teams in developing React-based web applications with a micro-frontend approach, focusing on modular, performant, and responsive design."

    },

    {

        "company": "Let's Talk",
        "role": "Project Manager & Front-End Developer",
        "city": "Rome",
        "country": "Italy",
        "startDate": "Jan 2022",
        "endDate": "Dec 2023",
        "description": "Led client acquisition and project delivery by identifying business opportunities, proposing React-based solutions, and negotiating contracts to expand digital services."

    },
    {
        "company": "Bepop",
        "role": "Project Manager",
        "city": "Rome",
        "country": "Italy",
        "startDate": "Sep 2021",
        "endDate": "Dec 2021",
        "description": "I acted as the primary point of contact for clients such as Uliveto and Yamamay, ensuring effective communication and alignment on campaign objectives."

    },
];



export const skills = [

    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Tailwind' },
    { name: 'JavaScript' },
    { name: 'Node' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'NextJS' },
    { name: 'NextUI' },
    { name: 'MagicUI' },
    { name: 'Shadcn' },
    { name: 'React Native' },
    { name: "Swift" },
    { name: 'Git' },
    { name: 'GitHub' }

];


export const objProjects = [

    {
        name: '3 body problem',
        description: 'This project is a simulation of the three-body problem, a classic problem in physics that describes the motion of three celestial bodies under mutual gravitational attraction.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        url: 'https://3-body-problem.netlify.app/',
        github: 'https://github.com/ricciviero/3-body-problem',
    },

    {
        name: 'Fattura Netta',
        description: 'A web application to calculate net invoices for the Italian flat-rate tax regime. ',
        tech: ['React', 'ViteJS', 'Tailwind', 'JavaScript'],
        url: 'https://fattura-netta.vercel.app/',
        github: 'https://github.com/ricciviero/fattura-netta',

    },

    {
        name: 'Talentifier',
        description: 'A simple landing page for Talentifier, a dev community.',
        tech: ['React', 'ViteJS', 'Tailwind', 'JavaScript'],
        url: 'https://www.talentifier.dev/',
        github: 'https://github.com/ricciviero/talentify-landing-page',
    },

    {
        name: 'ZeroNeet',
        description: 'A simple landing page for ZeroNeet, a beatiful startup community.',
        tech: ['React', 'ViteJS', 'Tailwind', 'JavaScript'],
        url: 'https://zeroneet.com/',
    }

];



export const objSocialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/ricciviero',
        icon: <FaGithub />,
    },

    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/riccardo-civiero-13b2a312b/',
        icon: <FaLinkedin />,
    },

    {
        name: 'X',
        url: 'https://x.com/ricciviero',
        icon: <FaXTwitter />,
    }
]



