import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Robel Abdissa',
  title: "Hi all, I'm Robel",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://docs.google.com/document/d/1FA7hb9TVcFDAIo4hXb9FnJ-vh1t-IfZ8/edit#heading=h.gjdgxs',
};

export const openSource = {
  githubUserName: 'robeleph',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/robel-abdissa/',
  github: 'https://github.com/robeleph'
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design',
    progressPercentage: '100',
  },
  {
    Stack: 'Backend',
    progressPercentage: '100',
  },
  {
    Stack: 'Programming',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Arizona State University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'December 2023 - December 2024',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: 'Addis Ababa University',
    subHeader: 'Bachelor of Software Engineering',
    duration: 'October 2015 - December 2020',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  }
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Luna',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'May 2022 – Dec 2022',
    desc: '• Built an in-app messaging platform with delivery receipts, offline messaging, and analytics using sendbird chat SDK.\n • Shipped an automatic thumbnail generation feature utilizing OpenGraph API, reducing image rendering latency by 50%.\n • Converted frontend monolith design to modularized, well-defined, and reusable Vue.js components achieving a 30% increase in performance on Google Lighthouse.',
  },
  {
    role: 'Software Engineer',
    company: 'JSI | John Snow Inc.',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: '• Developed a Vue.js application for the Ministry of Health of Ethiopia for medical licensing, improving data accuracy by 60%, and ensured 100% compliance with regulatory standards. • Deployed versions of the web app on Amazon Web Services, reducing paperwork by 85%. • Modeled and visualized a data visualization dashboard with Kibana of the ELK application stack.'
  },
  {
    role: 'Freelance Software Engineer',
    company: 'SamVision Specialized Eye Clinic',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Oct 2019 - Mar 2020',
    desc: '• Built a single-page application with component-based architecture, utilizing Angular 6 and TypeScript. • Implemented RESTful backend APIs with 50+ endpoints using Express.js, and MongoDB, securing API endpoints with role-based authentication and JWT(JSON Web Token).',
  },
  {
    role: 'Software Engineer Intern',
    company: 'JSI | John Snow Inc.',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Mar 2019 - Sept 2019',
    desc: '• Collaborated with a front-end team to design, create, and deliver a component-based, single-page, web application for a pharmaceutical supply agency in under three months. • Resolved code bugs by conducting unit tests with the Jasmine testing framework on a codebase of 25000+ lines.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'James Roycroft-Davis',
    feedback:
      'Robel is a first class front end engineer. He communicates brilliantly and his code is very strong. He’s a team player and was always diligent in his processes.',
  },
  {
    name: 'Andrew Robinson',
    feedback:
      'Robel has been an outstanding team player during his time with us. He also demonstrated his ability to work independently and taking on ownership and responsibility for his work. His ability to understand what is needed and deliver on time, made him a very valued team member. He is open and honest, and responds well to feedback, always pushing himself to fulfil the requirements with care and consistency. Without doubt, Robel is a reliable senior frontend JavaScript developer, and someone I would definitely recommend and would have no hesitation to engage with on future projects.',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Robel Abdissa',
  description:
    'A passionate Full Stack Web Developer and Frontend Engineer.',
  author: 'Robel E. Abdissa',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Robel',
    'Robel Abdissa',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Robel Portfolio ',
    'Robel Abdissa Portfolio',
  ],
};
