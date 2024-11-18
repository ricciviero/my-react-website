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
        "miniDescription": 'Front-End Developer in love with Tech.',
        "description": 'I’m a 26-year-old passionate about all things tech. After spending several years in marketing, I recently made the leap into development, with a primary focus on front-end technologies. I’m currently deepening my knowledge of frameworks like React, Flutter, Angular, and React Native.',
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
        "company": "Full Stack Developer",
        "role": "Career Switcher",
        "city": "Full-Remote",
        "country": "Italy",
        "startDate": "Jan 2024",
        "endDate": "Present",
        "description": "Engaging in self-directed learning, I am actively studying web development through online courses and tutorials to build a strong foundation in both front-end and back-end technologies."

    },

    {

        "company": "Let's Talk",
        "role": "Project Manager",
        "city": "Rome",
        "country": "Italy",
        "startDate": "Jan 2022",
        "endDate": "Dec 2023",
        "description": "I led efforts in acquiring new clients by identifying opportunities, pitching agency services, and building long-term relationships with potential clients."

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
    {
        "company": "Four ADV",
        "role": "Project Manager",
        "city": "Latina",
        "country": "Italy",
        "startDate": "Jan 2020",
        "endDate": "Aug 2021",
        "description": "I served as the primary point of contact between the agency and clients, ensuring clear communication and a thorough understanding of client needs."

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
        tech: ['React', 'Tailwind', 'JavaScript'],
        url: 'https://fattura-netta.vercel.app/',
        github: 'https://github.com/ricciviero/fattura-netta',

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



