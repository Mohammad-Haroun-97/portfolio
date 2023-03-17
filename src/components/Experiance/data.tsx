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

const calculateDateFromToday = (date: Date): JSXChildren => {
  const today = new Date();
  const diff = Math.abs(today.getTime() - date.getTime());
  const diffInMonths = Math.ceil(diff / (1000 * 3600 * 24 * 30));
  return diffInMonths;
};

export const data: ExperienceT[] = [
  {
    companyName: "Intrasoft MiddleEast",
    wideCompanyLogo: false,
    companyLogo: "/images/IntrasoftLogo.jpg",
    position: "Full Stack Java Developer",
    positionTime: `${calculateDateFromToday(new Date("2022-07-01"))} Months`,
    positionDescription: [
      "Develop and maintain scalable and maintainable backend applications in cloud based environment",
      "Write clean, maintainable and scalable code",
      "Collaborate with cross-functional teams to deliver high quality solutions that meet business objectives",
      "Participate in code reviews, design discussions and architecture reviews",
      "Work in an Agile software development environment and follow Agile methodologies",
    ],
    positionSkills: [
      {
        skillAlt: "java logo",
        skillLogo: "/icons/JavaIcon.svg",
      },
      {
        skillAlt: "spring logo",
        skillLogo: "/icons/SpringIcon.svg",
      },
      {
        skillAlt: "postgresql logo",
        skillLogo: "/icons/PostgresIcon.svg",
      },
      {
        skillAlt: "maven logo",
        skillLogo: "/icons/MavenIcon.svg",
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
        skillAlt: "tailwind logo",
        skillLogo: "/icons/TailwindIcon.svg",
      },
      {
        skillAlt: "postcss logo",
        skillLogo: "/icons/PostcssIcon.svg",
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
        skillAlt: "linux logo",
        skillLogo: "/icons/LinuxIcon.svg",
      },
      {
        skillAlt: "docker logo",
        skillLogo: "/icons/DockerIcon.svg",
      },
      {
        skillAlt: "sap logo",
        skillLogo: "/icons/SAPIcon.svg",
      },
    ],
  },
  {
    companyName: "Luminus University LTUC",
    companyLogo: "/images/LTUCLogo.png",
    wideCompanyLogo: true,
    position: "Software Development Teaching Assistant",
    positionTime: "7 Months",
    positionDescription: [
      "Assist the instructor in the development of course materials, such as lecture slides, assignments, and assessments",
      "Conduct review sessions and tutorials for students",
      "Assist in the delivery of lectures, including leading discussions, demonstrations, and answering questions",
      "Provide support and guidance to students as they complete assignments and projects",
      "Grade assignments and provide constructive feedback to students",
    ],
    positionSkills: [
      {
        skillAlt: "java logo",
        skillLogo: "/icons/JavaIcon.svg",
      },
      {
        skillAlt: "spring logo",
        skillLogo: "/icons/SpringIcon.svg",
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
        skillAlt: "git logo",
        skillLogo: "/icons/GitIcon.svg",
      },
      {
        skillAlt: "github logo",
        skillLogo: "/icons/GithubIcon.svg",
      },
      {
        skillAlt: "linux logo",
        skillLogo: "/icons/LinuxIcon.svg",
      },
    ],
  },
];
