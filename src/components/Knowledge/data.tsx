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
        prefer: true,
      },
      {
        name: "MaterialUI",
        image: "/icons/MaterialUiIcon.svg",
        alt: "material ui logo",
        prefer: true,
      },
      {
        name: "Ant design",
        image: "/icons/ant-design-2.svg",
        alt: "jest logo",
        prefer: true,
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
        prefer: true,
      },
      {
        name: "React Router",
        image: "/icons/ReactRouterIcon.svg",
        alt: "react router logo",
        prefer: true,
      },
      {
        name: "React Query",
        image: "/icons/ReactQueryIcon.svg",
        alt: "react query logo",
        prefer: true,
      },
      {
        name: "Jest",
        image: "/icons/JestIcon.svg",
        alt: "jest logo",
        prefer: false,
      },
      {
        name: "Styled components",
        image: "/icons/styled-components-1.svg",
        alt: "jest logo",
        prefer: true,
      },
      {
        name: "RXJS",
        image: "/icons/rxjs-1.svg",
        alt: "redux logo",
        prefer: false,
      },
      {
        name: "Vue",
        image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
        alt: "redux logo",
        prefer: true,
      },
      {
        name: "React Native",
        image: "/icons/react-native-1.svg",
        alt: "redux logo",
        prefer: false,
      },
    ],
  },
  {
    field: "Backend",
    desc: [
      {
        name: "Java",
        image: "/icons/JavaIcon.svg",
        alt: "java logo",
        prefer: false,
      },

      {
        name: "NodeJS",
        image: "/icons/NodeIcon.svg",
        alt: "node logo",
        prefer: true,
      },
      {
        name: "ExpressJS",
        image: "/icons/ExpressIcon.svg",
        alt: "express logo",
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
        prefer: false,
      },
      {
        name: "MongoDB",
        image: "/icons/MongodbIcon.svg",
        alt: "mongodb logo",
        prefer: false,
      },

    ],
  },
  {
    field: "Tools",
    desc: [

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
        prefer: true,
      },
      {
        name: "Yarn",
        image: "/icons/YarnIcon.svg",
        alt: "yarn logo",
        prefer: true,
      },
      {
        name: "Github",
        image: "/icons/GithubIcon.svg",
        alt: "github logo",
        prefer: true,
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
      {
        name: "Gitlab",
        image: "/icons/gitlab-1.svg",
        alt: "jenkins logo",
        prefer: true,
      },
      {
        name: "Bitbucket",
        image: "/icons/bitbucket-icon.svg",
        alt: "jenkins logo",
        prefer: true,
      },
    ],
  },

];
