import type { JSXChildren } from "@builder.io/qwik";

export type KnowledgeT = {
  field: JSXChildren;
  desc: {
    name: JSXChildren;
    image: string;
    alt: string;
    prefer: boolean;
  }[];
};

export const data: KnowledgeT[] = [
  {
    field: "Backend",
    desc: [
      {
        name: "Java",
        image: "/icons/JavaIcon.svg",
        alt: "java logo",
        prefer: true,
      },
      {
        name: "SpringBoot",
        image: "/icons/SpringIcon.svg",
        alt: "spring logo",
        prefer: true,
      },
      {
        name: "NodeJS",
        image: "/icons/NodeIcon.svg",
        alt: "node logo",
        prefer: false,
      },
      {
        name: "ExpressJS",
        image: "/icons/ExpressIcon.svg",
        alt: "express logo",
        prefer: false,
      },
      {
        name: "NestJS",
        image: "/icons/NestJSIcon.svg",
        alt: "nest logo",
        prefer: false,
      },
    ],
  },
  {
    field: "Frontend",
    desc: [
      {
        name: "ReactJS",
        image: "/icons/ReactIcon.svg",
        alt: "react logo",
        prefer: true,
      },
      {
        name: "NextJS",
        image: "/icons/NextjsIcon.svg",
        alt: "next logo",
        prefer: false,
      },
      {
        name: "Tailwind",
        image: "/icons/TailwindIcon.svg",
        alt: "tailwind logo",
        prefer: true,
      },
      {
        name: "Qwik",
        image: "/icons/QwikIcon.svg",
        alt: "qwik logo",
        prefer: false,
      },
      {
        name: "HTML",
        image: "/icons/HtmlIcon.svg",
        alt: "html logo",
        prefer: true,
      },
      {
        name: "CSS",
        image: "/icons/CssIcon.svg",
        alt: "css logo",
        prefer: true,
      },
      {
        name: "JavaScript",
        image: "/icons/JSIcon.svg",
        alt: "js logo",
        prefer: true,
      },
      {
        name: "TypeScript",
        image: "/icons/TSIcon.svg",
        alt: "ts logo",
        prefer: false,
      },
      {
        name: "MaterialUI",
        image: "/icons/MaterialUiIcon.svg",
        alt: "material ui logo",
        prefer: false,
      },
      {
        name: "Bootstrap",
        image: "/icons/BootstrapIcon.svg",
        alt: "bootstrap logo",
        prefer: false,
      },
      {
        name: "Redux",
        image: "/icons/ReduxIcon.svg",
        alt: "redux logo",
        prefer: false,
      },
      {
        name: "React Router",
        image: "/icons/ReactRouterIcon.svg",
        alt: "react router logo",
        prefer: false,
      },
      {
        name: "React Query",
        image: "/icons/ReactQueryIcon.svg",
        alt: "react query logo",
        prefer: false,
      },
      {
        name: "Jest",
        image: "/icons/JestIcon.svg",
        alt: "jest logo",
        prefer: false,
      },
    ],
  },
  {
    field: "Database",
    desc: [
      {
        name: "PostgreSQL",
        image: "/icons/PostgresIcon.svg",
        alt: "postgres logo",
        prefer: true,
      },
      {
        name: "MongoDB",
        image: "/icons/MongodbIcon.svg",
        alt: "mongodb logo",
        prefer: true,
      },
      {
        name: "DyanmoDB",
        image: "/icons/DynamoDbIcon.svg",
        alt: "dynamodb logo",
        prefer: false,
      },
    ],
  },
  {
    field: "Tools",
    desc: [
      {
        name: "Linux",
        image: "/icons/LinuxIcon.svg",
        alt: "linux logo",
        prefer: true,
      },
      {
        name: "Git",
        image: "/icons/GitIcon.svg",
        alt: "git logo",
        prefer: true,
      },
      {
        name: "NPM",
        image: "/icons/NpmIcon.svg",
        alt: "npm logo",
        prefer: false,
      },
      {
        name: "Yarn",
        image: "/icons/YarnIcon.svg",
        alt: "yarn logo",
        prefer: false,
      },
      {
        name: "Github",
        image: "/icons/GithubIcon.svg",
        alt: "github logo",
        prefer: true,
      },
      {
        name: "Maven",
        image: "/icons/MavenIcon.svg",
        alt: "maven logo",
        prefer: false,
      },
      {
        name: "Docker",
        image: "/icons/DockerIcon.svg",
        alt: "docker logo",
        prefer: false,
      },
      {
        name: "Jenkins",
        image: "/icons/JenkinsIcon.svg",
        alt: "jenkins logo",
        prefer: false,
      },
    ],
  },
  {
    field: "Cloud Computing",
    desc: [
      {
        name: "Amazon Web Services",
        image: "/icons/AWSIcon3.svg",
        alt: "aws logo",
        prefer: true,
      },
      {
        name: "SAP Cloud Platform",
        image: "/icons/SAPIcon.svg",
        alt: "sap logo",
        prefer: false,
      },
    ],
  },
];
