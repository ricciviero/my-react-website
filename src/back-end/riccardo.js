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
        }

    }
]