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
        "description": 'I’m a 26-year-old passionate about all things tech. After spending several years in marketing, I recently made the leap into development, with a primary focus on front-end technologies. I’m currently deepening my knowledge of frameworks like React, Flutter, Angular, and React Native, and I’m always looking for new ways to push myself further.',
        "company": "Freelance",
        "email": 'riccardo@riccardociviero.com',
        "phone": '+39 379 1100715',
        "website": 'https://riccardociviero.dev',
        "social": {
            "github": 'https://github.com/ricciviero',
            "linkedin": 'https://www.linkedin.com/in/riccardo-civiero-13b2a312b/',
        },

        'skills': {
            'html': true,
            'css': true,
            'tailwind': true,
            'javascript': true,
            'node': true,
            'typescript': true,
            'react': true,
            'nextJS': true,
            'angular': true,
            'nextUI': true,
            'magicUI': true,
            'python': false,
            'ruby': false,
            'php': false,
            'java': false,
            'c': false,
            'c++': false,
            'c#': false,
            'go': false,
            'rust': false,
            'swift': false,
            'kotlin': false,
            'flutter': false,
            'reactNative': false,
            'ionic': false,
            'vue': false,
            'svelte': false,
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
        "description": "Engaging in self-directed learning, I am actively studying web development through online courses and tutorials to build a strong foundation in both front-end and back-end technologies. I am building practical experience by working on personal projects, applying new skills in real-world scenarios to enhance my understanding of the entire development lifecycle. My focus is on gaining proficiency in key technologies, including essential programming languages and frameworks such as JavaScript, React, Node.js, and databases like MongoDB or SQL. Additionally, I am participating in developer communities, joining coding forums to connect with other developers, share knowledge, and stay updated on industry trends and best practices. To guide my progress, I have set clear goals, establishing a roadmap for my transformation with milestones for completing specific projects and gaining certifications that demonstrate my expertise."

    },

    {

        "company": "Let's Talk",
        "role": "Co-Founder",
        "city": "Rome",
        "country": "Italy",
        "startDate": "Jan 2022",
        "endDate": "Dec 2023",
        "description": "I led efforts in acquiring new clients by identifying opportunities, pitching agency services, and building long-term relationships with potential clients. I developed and implemented client acquisition strategies, including networking, outreach, and negotiating contracts to expand the agency’s portfolio. I oversaw the management of key projects from start to finish, ensuring that client expectations were met, timelines were adhered to, and resources were allocated effectively. Additionally, I collaborated with internal teams to ensure smooth project execution, maintaining high standards of quality while delivering on client objectives. As a senior point of contact for clients, I managed high-level relationships, resolved issues, and provided strategic guidance throughout the project lifecycle."

    },
    {
        "company": "Bepop",
        "role": "Account Manager",
        "city": "Rome",
        "country": "Italy",
        "startDate": "Sep 2021",
        "endDate": "Dec 2021",
        "description": "I acted as the primary point of contact for clients such as Uliveto and Yamamay, ensuring effective communication and alignment on campaign objectives. I assisted in managing the execution of advertising campaigns, coordinating with internal teams to meet deadlines and client expectations."

    },
    {
        "company": "Four ADV",
        "role": "Account Manager",
        "city": "Latina",
        "country": "Italy",
        "startDate": "Jan 2020",
        "endDate": "Aug 2021",
        "description": "I served as the primary point of contact between the agency and clients, ensuring clear communication and a thorough understanding of client needs. I managed and oversaw the execution of advertising campaigns, coordinating with internal teams (creative, media, digital) to ensure timely and effective delivery. Additionally, I developed and maintained strong client relationships by providing regular updates on project progress and performance while addressing any concerns or feedback. I also monitored campaign performance and collaborated with clients to refine strategies, ensuring goals were met and suggesting improvements based on data analysis."

    },

    {
        "company": "Stratego",
        "role": "Junior Copywriter",
        "city": "Latina",
        "country": "Italy",
        "startDate": "Sep 2018",
        "endDate": "Dec 2019",
        "description": "I was responsible for the ideation and development of editorial plans for major social media channels, as well as the creation and management of advertising campaigns. This included designing and managing FB/IG ads and crafting comprehensive communication and advertising strategies to meet the brand’s objectives."

    },
];
