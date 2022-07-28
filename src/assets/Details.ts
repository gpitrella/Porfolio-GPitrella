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
    `Hello! I'm Gabriel Full Stack Developer graduated in Industrial Engineering with
    experience working with JavaScript, NodeJS, React, Sequelize,
    SQL among other technologies in the sector. One of my achived was developed an E-commerce that surpasses
    600 successful sales in the first three months, also I worked in
    Toyota Argentina for more than 7 years which strengthened my analytical thinking,
    effective problem solving, teamwork, communication and continuous improvement. You can download my full resume below.`,
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
