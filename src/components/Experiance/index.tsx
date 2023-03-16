import type { JSXChildren } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type Experience = {
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

export const Experience = component$(() => {

  const calculateDateFromToday = (date: Date) : JSXChildren => {
    const today = new Date();
    const diff = Math.abs(today.getTime() - date.getTime());
    const diffInMonths = Math.ceil(diff / (1000 * 3600 * 24 * 30));
    return diffInMonths;
  }

  const experiances: Experience[] = [
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
        "Work in an Agile software development environment and follow Agile methodologies"
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
      companyName: "Luminus Technical University College LTUC",
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

  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
          <span class="text-sm font-semibold md:text-base">
            👨‍💻 Work Experience
          </span>
        </h2>
        <ul class="flex flex-wrap gap-6">
          {experiances.map((experience) => (
            <li class="flex w-full gap-12 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
              <div class="flex flex-col justify-between gap-3">
                <div class="flex items-center gap-2">
                  <img
                    src={experience.companyLogo?.toString()}
                    alt={experience.companyName?.toString()}
                    class={experience.wideCompanyLogo ? "h-7 w-10" : "h-7 w-7"}
                  />
                  <div class="flex items-baseline gap-2">
                    <p class="flex align-baseline text-sm">
                      {experience.companyName}
                    </p>
                    <span class="rounded-full border border-details px-2 py-1 text-xs">
                      {experience.positionTime}
                    </span>
                  </div>
                </div>
                <ul class="flex flex-col gap-1 pl-1">
                  <li class="flex text-sm">
                    <h3 class="font-semibold">{experience.position}</h3>
                  </li>
                  <li class="flex text-sm">
                    <ul>
                      {experience.positionDescription.map((desc) => (
                        <li class="list-disc-custom flex">{desc}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  {experience.positionSkills.map((skill) => (
                    <span class="rounded-lg bg-misc p-1 transition-all">
                      <img
                        src={skill.skillLogo?.toString()}
                        width="24"
                        height="24"
                        alt={skill.skillAlt?.toString()}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
