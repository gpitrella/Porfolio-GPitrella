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
    repo: "",
    live: "https://laquastore.com",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684188161/LAqua6x6_uoqqxi.webp",
    title: "Beauty E-commerce",
    description: `This is a full Web Page, you can buy any product in the store. The main used
    technologies are: WordPress, MercadoPago, Google Ads, Google Analytics, Facebook Ads`,
    techs: ["WordPress", "MercadoPago", "Google Ads", "Google Analytics", "Facebook Ads"],
  },
  {
    repo: "https://github.com/gpitrella/PF-FrontEnd",
    live: "https://techmarketfront.vercel.app",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684526983/TechMarket1_ii0urn.webp",
    title: "Tech Market App",
    description: `In this App you can buy any tech product and use the App like user or admin. The main 
    used technologies are: React JS, Redux, SendGrid, Sequelize, Express, Postgress.`,
    techs: ["React JS", "Redux", "SendGrid", "Sequelize", "Express", "Postgress"],
  },
  {
    repo: "https://github.com/gpitrella/PI-VideoGames",
    live: "https://deploy-videogame.vercel.app",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684592322/videogamesAppnEW_v5tvou.webp",
    title: "VideoGames App",
    description: `In this App you can see all details of your favorites videogames. The main 
    used technologies are: React JS, Sequelize, Express, Postgress, API Integration.`,
    techs: ["React JS", "SendGrid", "Sequelize", "Express", "Postgress"],
  },
  {
    repo: "https://github.com/gpitrella/Porfolio-GPitrella",
    live: "https://porfolio-gpitrella.vercel.app",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684590448/porfolio-gpitrella-NEW_on91k7.webp",
    title: "Porfolio",
    description: `In this App you can see everything about my studies, professional career, projects and more. The main 
    used technologies are: React JS, TypeScript, SASS, Lotties Integration.`,
    techs: ["React JS", "TypeScript", "Sequelize", "Express", "Postgress"],
  },
  {
    repo: "",
    live: "https://dropshipapps.club/",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684189420/Dropship_g7_qrb2jm.webp",
    title: "Landing Page DropShip",
    description: `Development of Landing Page to dropshipping automation tool for Shopify. The main stacks 
    used were WordPress, Elementor, Vultr, Runcloud, Cloudflare.`,
    techs: ["WordPress", "Elementor", "Vultr", "Runcloud", "Cloudflare"],
  },
  {
    repo: "https://github.com/gpitrella/JUNIOR",
    live: "https://appjunior.vercel.app/",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684189263/Dropship_g7yp_j25qwi.webp",
    title: "App Junior",
    description: `App development to help junior programmers gain experience. The main 
    use technologies will be: React JS, JavaScript, MongoDB.`,
    techs: ["React JS", "JavaScript", "Mongoose", "Express", "MongoDB"],
  },
  {
    repo: "",
    live: "https://higherme.com/our-team",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684191098/higherme_zweljj.webp",
    title: "Our Team Page",
    description: ``,
    techs: [""],
  },
  {
    repo: "",
    live: "https://www.mulgravedentalgroup.com.au/services/all-on-4",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684190846/dental_eumz2l.webp",
    title: "Dental Services Page",
    description: ``,
    techs: [""],
  },
  {
    repo: "",
    live: "https://lp.spotdraft.com/cms_2023",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684592220/Strapt_eqjvrv_zbd9jn.webp",
    title: "Home Page Services",
    description: ``,
    techs: [""],
  },
  {
    repo: "",
    live: "https://camargoinsurance.com/real-estate-investors",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684591330/CamargoLP_oa7nkr.webp",
    title: "Home Page Real Estate",
    description: ``,
    techs: [""],
  },
  {
    repo: "",
    live: "https://higherme.com/our-story",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684591677/Our-Story2_u4n5ui.webp",
    title: "Our Story Page",
    description: ``,
    techs: [""],
  },
  {
    repo: "",
    live: "https://www.sendible.com/",
    image: "https://res.cloudinary.com/djgghmpgh/image/upload/v1684592086/Marketing_omkdpo.webp",
    title: "Home Page Marketing",
    description: ``,
    techs: [""],
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
