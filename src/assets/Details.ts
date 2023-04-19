export interface Experience {
  company: string;
  title: string;
  tasks: string[];
}

export interface IProjectsList {
  repo: string;
  live: string;
  image: string;
  title: string;
  description: string;
  techs: string[];
}

export const ProjectsList: IProjectsList[] = [
  {
    repo: "https://laquastore.com.ar",
    live: "https://laquastore.com.ar",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1658838662/laquastore_m7emsg.jpg",
    title: "Beauty E-commerce",
    description: `This is a full Web Page, you can buy any product in the store. The main used
    technologies are: WordPress, MercadoPago, Google Ads, Google Analytics, Facebook Ads`,
    techs: ["WordPress", "MercadoPago", "Google Ads", "Google Analytics", "Facebook Ads"],
  },
  {
    repo: "https://github.com/gpitrella/PF-FrontEnd",
    live: "https://techmarketfront.vercel.app",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1658686749/TechMarket_dpnvkm.jpg",
    title: "Tech Market App",
    description: `In this App you can buy any tech product and use the App like user or admin. The main 
    used technologies are: React JS, Redux, SendGrid, Sequelize, Express, Postgress.`,
    techs: ["React JS", "Redux", "SendGrid", "Sequelize", "Express", "Postgress"],
  },
  {
    repo: "https://github.com/gpitrella/PI-VideoGames",
    live: "https://deploy-videogame.vercel.app",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1658838851/videogamesApp2_ktu8ff.jpg",
    title: "VideoGames App",
    description: `In this App you can see all details of your favorites videogames. The main 
    used technologies are: React JS, Sequelize, Express, Postgress, API Integration.`,
    techs: ["React JS", "SendGrid", "Sequelize", "Express", "Postgress"],
  },
  {
    repo: "https://github.com/gpitrella/Porfolio-GPitrella",
    live: "https://porfolio-gpitrella.vercel.app",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1659037961/porfolio-gpitrella_ir6xmz.jpg",
    title: "Porfolio",
    description: `In this App you can see everything about my studies, professional career, projects and more. The main 
    used technologies are: React JS, TypeScript, SASS, Lotties Integration.`,
    techs: ["React JS", "TypeScript", "Sequelize", "Express", "Postgress"],
  },
  {
    repo: "https://dropshipapps.club/",
    live: "https://dropshipapps.club/",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1664194866/Dropship_g7ypnl.jpg",
    title: "Landing Page DropShip App",
    description: `Development of Landing Page to dropshipping automation tool for Shopify. The main stacks 
    used were WordPress, Elementor, Vultr, Runcloud, Cloudflare.`,
    techs: ["WordPress", "Elementor", "Vultr", "Runcloud", "Cloudflare"],
  },
  {
    repo: "https://github.com/gpitrella/JUNIOR",
    live: "https://appjunior.vercel.app/",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1661260107/Junior_mx4ld5.jpg",
    title: "App Junior [In Progress ...]",
    description: `App development to help junior programmers gain experience. The main 
    use technologies will be: React JS, JavaScript, MongoDB.`,
    techs: ["React JS", "JavaScript", "Mongoose", "Express", "MongoDB"],
  } 
];




export const SkillList: string[] = [
  "Teamwork",
  "Communication",
  "Dedication",
  "Perseverance",
  "Resilience",
  "Continuous Improvement",
  "Problem resolution",
  "Critical Analysis",
];

export interface IDetails {
  title: string;
  text: string[] | string;
}

export const ContactInfo: IDetails = {
  title: "Contact",
  text: [
    "Do you like my projects? Whether you have a question or just want to say hello, get in touch.",
  ],
};

export interface IAboutMe {
  title: string;
  text: string[];
}

export const AboutMe: IDetails = {
  title: "About Me",
  text: [
    `Hi! I'm Gabriel Full Stack Developer graduated from Industrial Engineering 
    with more than 3 years of practical experience in the design, development and implementation of 
    applications and solutions using technologies such as TypeScript, JavaScript, NodeJS, ReactJS, Express, 
    PostgreSQL, MongoDB among other related technologies and with more than 14 years of experience as an Engineer. 
    I worked at Toyota Argentina for more than 7 years, which strengthened my analytical thinking, effective 
    problem solving, teamwork, communication and continuous improvement. You can download my full resume below.`,
    `My main soft skills are:`,
  ],
};

export const AllExperience: Experience[] = [
  {
    company: "",
    title: "",
    tasks: [
    ],
  },
  {
    company: "",
    title: "",
    tasks: [
    ],
  },
];
