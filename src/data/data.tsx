import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';

import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mingyun Zhang.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I am a student at <strong className="text-stone-100">Southern Methodist University</strong>,currently studying for a master degree in <strong className="text-stone-100">Computer Science.</strong> 
      I had an internship experience as a software engineer, and I also successfully completed <strong className="text-stone-100">Full-Stack</strong> project experience.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       In my other projects,You can visit my <strong className="text-stone-100">LinkedIn</strong>, or <strong className="text-stone-100">GitHub</strong> to see the related projects.
    
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a CS student, 
  I love learning about the latest technologies and frameworks, especially in JAVA, Python, and React. 
  I enjoy working in teams and finding innovative ways to learn. I'm not afraid of challenges. 
  My passion for technology and ability to solve problems help me grow in a fast-paced learning environment.`,
  aboutItems: [
    {label: 'Location', text: 'Dallas, TX', Icon: MapIcon},
    {label: 'Interests', text: 'Music,Basketball', Icon: SparklesIcon},
    {label: 'Study', text: 'Southern Methodist University', Icon: AcademicCapIcon},
    {label: 'Skills' , text:'JAVA, React,Python,JavaScript',Icon: FlagIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Vue.js',
        level: 8,
      },
      {
        name: 'Javacript',
        level: 8,
      },
      {
        name: 'React',
        level: 7,
      },
   
      {
        name: 'Typescript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'JAVA',
        level: 9,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 7,
      },

    ],
  },
  {
    name: 'Developer & Tools: ',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Redis',
        level: 8,
      },
      {
        name: 'Postman',
        level: 8,
      }, {
        name: 'AWS',
        level: 7,
      },

    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'TA Management Application',
    description: 'TA Management Application (SMU CS Department)',
    url: 'https://github.com/unlckks/react-frontend-main',
    image: porfolioImage5,
  },
  {
    title: 'RBAC',
    description: 'Based SpringMVC role-based Access Control.',
    url: 'https://github.com/unlckks/rbac',
    image: porfolioImage1,
  },
  {
    title: 'PMS',
    description: 'Based SpringBoot Intelligent Property Management System',
    url: 'https://https://github.com/unlckks/pms',
    image: porfolioImage2,
  },
  {
    title: 'Microservices Mall',
    description: 'Based SpringCloud Choose Microservices Mall',
    url: 'https://https://github.com/unlckks/power-mall',
    image: porfolioImage3,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2025',
    location: 'Southern Methodist University',
    title: 'Masters in Computer Science',
    content: <p>Develop TA application system...etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2023 - Apr 2023 ',
    location: 'Hubei YunGu Digital Governance Research Institute Co. Ltd',
    title: ' Software Engineer Intern ',
    content: (
      <p>
       1.Developed the front-end of the water supply analysis system using Vue.js + Element-UI and JavaScript, CSS/HTML.
      2.Developed and maintained backend systems for water supply analysis and alarm analysis systems utilizing Java SpringBoot framework....etc
      </p>
    ),
  },
  {
    date: 'Aug 2022 - Nov 2022',
    location: 'Southeast University',
    title: ' Research Assistant',
    content: (
      <p>
       Expanded knowledge in data computation with a specific focus on deep learning and machine learning...etc
      </p>
    ),
  },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'zmy9991010@gmail.com',
      href: 'mailto:zmy9991010@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Dallas ,Texas',
      href: 'https://www.google.com/maps/place/Southern+Methodist+University/',
    },
    {
      type: ContactType.Github,
      text: 'unlckk',
      href: 'https://github.com/unlckks/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/unlckks/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mingyunzhang/'},
];
