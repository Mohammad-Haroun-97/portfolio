import type { JSXChildren } from "@builder.io/qwik";

export type ExperienceT = {
  companyName: JSXChildren;
  companyLogo: JSXChildren;
  wideCompanyLogo: Boolean;
  position: JSXChildren;
  positionTime: JSXChildren;
  positionDescription: JSXChildren[];
  positionSkills: {
    skillAlt: JSXChildren;
    skillLogo: JSXChildren;
  }[];
};



export const data: ExperienceT[] = [
  {
    companyName: "Network International",
    wideCompanyLogo: false,
    companyLogo: "https://www.network.ae/website/images/logo.svg",
    position: "Senior React.js software developer",
    positionTime: `1.6 Years`,
    positionDescription: [
      "Spearheading the development of a Direct-to-Consumer payment solution from the ground up.",
        "Designed and implemented a dynamic user interface with React.js, leveraging functional components and hooks",
      "Write clean, maintainable and scalable code",
      "Collaborate with cross-functional teams to deliver high quality solutions that meet business objectives",
      "Participate in code reviews, design discussions and architecture reviews",
      "Work in an Agile software development environment and follow Agile methodologies",
    ],
    positionSkills: [
      {
        skillAlt: "react Query logo",
        skillLogo: "/icons/ReactQueryIcon.svg",
      },
      {
        skillAlt: "react Query logo",
        skillLogo: "/icons/ReactRouterIcon.svg",
      },
      {
        skillAlt: "javascript logo",
        skillLogo: "/icons/JSIcon.svg",
      },
      {
        skillAlt: "react logo",
        skillLogo: "/icons/ReactIcon.svg",
      },
      {
        skillAlt: "redux logo",
        skillLogo: "/icons/ReduxIcon.svg",
      },
      {
        skillAlt: "MaterialUI logo",
        skillLogo: "/icons/ant-design-2.svg",
      },
      {
        skillAlt: "storybook logo",
        skillLogo: "/icons/storybook-1.svg",
      },
      {
        skillAlt: "Bitbucket logo",
        skillLogo: "/icons/bitbucket-icon.svg",
      },
      {
        skillAlt: "html logo",
        skillLogo: "/icons/HtmlIcon.svg",
      },
      {
        skillAlt: "css logo",
        skillLogo: "/icons/CssIcon.svg",
      },
      {
        skillAlt: "git logo",
        skillLogo: "/icons/GitIcon.svg",
      },
      {
        skillAlt: "github logo",
        skillLogo: "/icons/GithubIcon.svg",
      },

      {
        skillAlt: "docker logo",
        skillLogo: "/icons/DockerIcon.svg",
      },
      {
        skillAlt: "TypeScript logo",
        skillLogo: "/icons/TsIcon.svg",
      },
      {
        skillAlt: "Postman",
        skillLogo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },

    ],
  },
  {
    companyName: "Netcompany",
    wideCompanyLogo: false,
    companyLogo: "https://osaid-alhomedy.vercel.app/images/netcompanyLogo.ico",
    position: "Frontend JavaScript Developer",
    positionTime: `1.6 Years`,
    positionDescription: [
      "Developed a robust and flexible application designed to support core revenue management operations",
      "Designed configurable features and workflows to accommodate the specific policies of each jurisdiction, ensuring seamless future upgrades without compromising flexibility",
      "Building reusable UI components and publishing them (creating our own library)",
        "Collaborate with senior developers, product owners and scrum masters to update the\n" +
        "website and create new features",
      "Write clean, maintainable and scalable code",

      "Work in an Agile software development environment and follow Agile methodologies",
    ],
    positionSkills: [
      {
        skillAlt: "rxjs logo",
        skillLogo: "/icons/rxjs-1.svg",
      },
      {
        skillAlt: "javascript logo",
        skillLogo: "/icons/JSIcon.svg",
      },
      {
        skillAlt: "react logo",
        skillLogo: "/icons/ReactIcon.svg",
      },
      {
        skillAlt: "redux logo",
        skillLogo: "/icons/ReduxIcon.svg",
      },
      {
        skillAlt: "MaterialUI logo",
        skillLogo: "/icons/MaterialUIIcon.svg",
      },
      {
        skillAlt: "storybook logo",
        skillLogo: "/icons/storybook-1.svg",
      },
      {
        skillAlt: "Gitlab logo",
        skillLogo: "/icons/gitlab-1.svg",
      },
      {
        skillAlt: "html logo",
        skillLogo: "/icons/HtmlIcon.svg",
      },
      {
        skillAlt: "css logo",
        skillLogo: "/icons/CssIcon.svg",
      },
      {
        skillAlt: "git logo",
        skillLogo: "/icons/GitIcon.svg",
      },
      {
        skillAlt: "github logo",
        skillLogo: "/icons/GithubIcon.svg",
      },

      {
        skillAlt: "docker logo",
        skillLogo: "/icons/DockerIcon.svg",
      },
      {
        skillAlt: "TypeScript logo",
        skillLogo: "/icons/TsIcon.svg",
      },
      {
        skillAlt: "JEST logo",
        skillLogo: "/icons/JestIcon.svg",
      },
    ],
  },
  {
    companyName: "Agents on Cloud",
    wideCompanyLogo: false,
    companyLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQHH_MbG8kmvbQ/company-logo_200_200/company-logo_200_200/0/1639217780337?e=1749081600&v=beta&t=zcSQinLchviOVRBmJb-81KdV_PfMsXH6X5Ih8Jwc8AM",
    position: "Full Stack Developer",
    positionTime: `7 Months`,
    positionDescription: [
      "Build a Marketing management system using VueJs and Node.js",
      "Responsible for building Mobile application using React Native and combine all features\n" +
      "using NX workspace",
      "Ensured cross-browser compatibility and optimized web pages for performance and user experience.",
      "Assisted in the development and maintenance of user interfaces using HTML, CSS, and JavaScript.",
      "Helped design and implement responsive layouts, adapting websites to different screen sizes and devices.",
    ],
    positionSkills: [

      {
        skillAlt: "javascript logo",
        skillLogo: "/icons/JSIcon.svg",
      },
      {
        skillAlt: "Vue logo",
        skillLogo: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
      },
      {
        skillAlt: "redux logo",
        skillLogo: "/icons/ReduxIcon.svg",
      },
      {
        skillAlt: "React Native logo",
        skillLogo: "https://upload.vectorlogo.zone/logos/reactnativedev/images/199b2976-954e-4e42-8d79-12a784e2cdf9.svg",
      },

      {
        skillAlt: "html logo",
        skillLogo: "/icons/HtmlIcon.svg",
      },
      {
        skillAlt: "css logo",
        skillLogo: "/icons/CssIcon.svg",
      },
      {
        skillAlt: "git logo",
        skillLogo: "/icons/GitIcon.svg",
      },
      {
        skillAlt: "github logo",
        skillLogo: "/icons/GithubIcon.svg",
      },

      {
        skillAlt: "TypeScript logo",
        skillLogo: "/icons/TsIcon.svg",
      },
      {
        skillAlt: "NX logo",
        skillLogo: "https://images.seeklogo.com/logo-png/42/1/nx-logo-png_seeklogo-428035.png",
      },
      {
        skillAlt: "Node.js logo",
        skillLogo: "/icons/NodeIcon.svg",
      },
      {
        skillAlt: "MongoDB logo",
        skillLogo: "/icons/MongodbIcon.svg",
      },
      {
        skillAlt: "Postgres logo",
        skillLogo: "/icons/PostgresIcon.svg",
      },
      {
        skillAlt: "express logo",
        skillLogo: "/icons/ExpressIcon.svg",
      },
    ],
  },

];
