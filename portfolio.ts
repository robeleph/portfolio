import { DangerousChangeType } from 'graphql';
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
  name: 'Robel E. Abdissa',
  title: "Hi all, I'm Robel",
  description:
    "I am a motivated Master of Computer Science student at Arizona State University with a passion for software engineering and a proven track record of success. With several years of experience as a software engineer, I have developed strong skills in both front-end and back-end development, as well as expertise in software engineering best practices. Throughout my professional journey, I have demonstrated my ability to apply my technical skills to solve complex problems and deliver high-quality software solutions. I am adept at collaborating with cross-functional teams and thrive in dynamic environments where I can contribute to the full software development lifecycle.",
  resumeLink:
    'https://docs.google.com/document/d/1FA7hb9TVcFDAIo4hXb9FnJ-vh1t-IfZ8/edit?usp=sharing&ouid=108565244285939175953&rtpof=true&sd=true',
};

export const openSource = {
  githubUserName: 'robeleph',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/robel-abdissa/',
  github: 'https://github.com/robeleph',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js, Angular, and Vue.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django, Spring, and Express.js Framework'),
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
          skillName: 'Vuejs',
          fontAwesomeClassName: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'Nuxt',
          fontAwesomeClassName: 'vscode-icons:file-type-nuxt',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'vscode-icons:file-type-java',
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
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
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
          skillName: 'Mongodb',
          fontAwesomeClassName: 'logos:mongodb',
        },
        {
          skillName: 'SQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'GitLab',
          fontAwesomeClassName: 'logos:gitlab',
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
  {
    Stack: 'DevOps',
    progressPercentage: '100',
  }
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Arizona State University',
    subHeader: 'Master of Science - MS, Computer Science',
    duration: 'January 2023 - December 2024',
    desc: 'Coursework:',
    descBullets: [
      'CSE 511: Data Processing at Scale',
      'CSE 543: Information Assurance and Security',
      'CSE 551: Foundations of Algorithms',
      'CSE 564: Software Design',
      'CSE 578: Data Visualization',
      'CSE 579: Knowledge Representation',

    ],
  },
  {
    schoolName: 'Addis Ababa University',
    subHeader: `Bachelor's Degree, Software Engineering`,
    duration: 'October 2015 - December 2020',
    desc: 'Coursework:',
    descBullets: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Web Programming',
      'Mobile Development',
      'Discrete Mathematics',
      'IT Security'
    ],
  }
];

export const experience: ExperienceType[] = [
  {
    role: 'Graduate Services Assistant',
    company: 'Arizona State University',
    companyLogo: '/img/icons/common/asu_logo.png',
    date: 'August 2023 – Present',
    desc: '',
    descBullets: [
      'Delivered CSE 551: Foundations of Algorithms course to 200+ students, serving as a grader, facilitating course logistics, proctoring exams, and ensuring effective communication.'
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Luna',
    companyLogo: '/img/icons/common/luna.png',
    date: 'May 2022 – Dec 2022',
    desc: '',
    descBullets: [
      'Built an in-app messaging platform with delivery receipts, offline messaging, and analytics using sendbird chat SDK.',
      'Shipped an automatic thumbnail generation feature utilizing OpenGraph API, reducing image rendering latency by 50%',
      'Converted frontend monolith design to modularized, well-defined, and reusable Vue.js components achieving a 30% increase in performance on Google Lighthouse.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'JSI | John Snow Inc.',
    companyLogo: '/img/icons/common/jsi.png',
    date: 'Feb 2021 – Apr 2022',
    desc: '',
    descBullets: [
      'Developed a Vue.js application for the Ministry of Health of Ethiopia for medical licensing, improving data accuracy by 60%, and ensured 100% compliance with regulatory standards.',
      'Deployed versions of the web app on Amazon Web Services, reducing paperwork by 85%.',
      'Modeled and visualized a data visualization dashboard with Kibana of the ELK application stack.'
    ],
  },
  {
    role: 'Freelance Software Engineer',
    company: 'SamVision Specialized Eye Clinic',
    companyLogo: '/img/icons/common/samvision.png',
    date: 'Oct 2019 - Mar 2020',
    desc: '',
    descBullets: [
      'Built a single-page application with component-based architecture, utilizing Angular 6 and TypeScript.',
      'Implemented RESTful backend APIs with 50+ endpoints using Express.js, and MongoDB, securing API endpoints with role-based authentication and JWT(JSON Web Token).'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'JSI | John Snow Inc.',
    companyLogo: '/img/icons/common/jsi.png',
    date: 'Mar 2019 - Sept 2019',
    desc: '',
    descBullets: [
      'Collaborated with a front-end team to design, create, and deliver a component-based, single-page, web application for a pharmaceutical supply agency in under three months.',
      'Resolved code bugs by conducting unit tests with the Jasmine testing framework on a codebase of 25000+ lines.'
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Getwelp',
    desc: 'An all-in-one new cloud-based platform specifically designed and built for behaviour specialists and dog trainers to help run their businesses more smoothly.',
    link: 'https://goluna.app/',
    img: '/img/icons/common/getwelpthumbnail.jpeg',
  },
  {
    name: 'HRIS',
    desc: 'The primary role of this module is to manage workers employed through the FMOH at the ministry, regional, hospital, zonal, and woreda level.',
    github: 'https://github.com/robeleph/hris',
    link: 'https://hris-rho.vercel.app/',
    img: '/img/icons/common/hris.png',
  },
  {
    name: 'HRL',
    desc: 'Everything you need for managing your medical licenses in Ethiopia. Create, manage, and follow up on your license request online.',
    github: 'https://github.com/robeleph/pplrh',
    img: '/img/icons/common/hrl.png',
    link: 'https://hrl.moh.gov.et/'
  },
  {
    name: 'Nuxt Movies',
    desc: 'A convenient platform that allows users to search for recently released movies and find local cinemas where they are currently being shown.',
    github: 'https://github.com/robeleph/nuxt-movies.git',
    img: '/img/icons/common/nuxtmovies.png',

  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'James Roycroft-Davis',
    title: 'Former CEO at Luna',
    feedback:
      'Robel is a first class front end engineer. He communicates brilliantly and his code is very strong. He’s a team player and was always diligent in his processes.',
  },
  {
    name: 'Andrew Robinson',
    title: 'Co-founder and CEO at Luna',
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
  url: 'https://www.linkedin.com/in/robel-abdissa/',
  keywords: [
    'Robel',
    'Robel Abdissa',
    '@robeleph',
    'robeleph',
    'Portfolio',
    'Robel Portfolio ',
    'Robel Abdissa Portfolio',
  ],
};
