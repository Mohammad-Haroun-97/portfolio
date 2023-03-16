import type { JSXChildren } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type Friends = {
  name: JSXChildren;
  image: string;
  description: JSXChildren[];
  link: string;
};

export const Friends = component$(() => {
  const friends: Friends[] = [
    {
      name: "Deyaa Bozan",
      image: "https://avatars.githubusercontent.com/u/71646355?v=4",
      description: ["Central Trade & Auto Co", "Full Stack Developer 😎"],
      link: "https://github.com/deyaa-pozan",
    },
    {
      name: "Bara'a Al-Osaily",
      image: "https://avatars.githubusercontent.com/u/81553898?v=4",
      description: ["Capella Solutions", "Software Developer 🤓"],
      link: "https://github.com/baraaAlosaily",
    },
    {
      name: "Rahaf Al-Jazzazi",
      image: "https://avatars.githubusercontent.com/u/83532535?v=4",
      description: ["Intrasoft Middle East", "Frontend Developer 🤩"],
      link: "https://github.com/RahafJ96",
    },
    {
      name: "Ghadeer Khasawneh",
      image: "https://avatars.githubusercontent.com/u/83525457?v=4",

      description: ["Sociumtech", "Fullstack Developer 🤗"],
      link: "https://github.com/GhadeerKh9",
    },
    {
      name: "Tamim Hamoudi",
      image: "https://avatars.githubusercontent.com/u/18720062?v=4",
      description: [
        "Jordan Open Source Association",
        "Senior Technologist",
        "Mentor 💀",
      ],
      link: "https://github.com/thamudi",
    },
    {
      name: "Mohammad Alzoubi",
      image: "https://avatars.githubusercontent.com/u/83534673?v=4",
      description: ["OPTIMIZA", "Fullstack Developer 🤑"],
      link: "https://github.com/macRos-Alzoubi",
    },
    {
      name: "Mohammed Al-Hanbali",
      image: "https://avatars.githubusercontent.com/u/85102863?v=4",
      description: ["Avertra", "Software Developer 🐍"],
      link: "https://github.com/Moha-AlHanbali",
    },
    {
      name: "Majd Khasawneh",
      image:
        "https://media.licdn.com/dms/image/D4E03AQHZwgfgAPW1YA/profile-displayphoto-shrink_800_800/0/1665082714161?e=1684368000&v=beta&t=bX40raFlUj5edzQ87ctRVO7NVdwEcDou1W5Zvmbh_54",
      description: ["MBC Shahid 😎", "Java Developer"],
      link: "https://www.linkedin.com/in/majd-khasawneh-687695192/",
    },
    {
      name: "Hadi Aji",
      image: "https://avatars.githubusercontent.com/u/70090253?v=4",
      description: ["Avertra", "Software Developer 🤓"],
      link: "https://github.com/Hadeaji",
    },
  ];
  return (
    <div class="md:scroll-m-16">
      <div>
        <p class="mb-3 text-sm font-semibold md:text-base">
          👏 Developers Worked With
        </p>
        <ul class="flex flex-wrap justify-center gap-y-14 text-center">
          {friends.map((friend) => (
            <li class="flex w-full max-w-[290.66px] flex-col justify-between gap-2 px-0 sm:px-3">
              <div class="flex flex-col items-center gap-2">
                <div class="relative  h-40 w-40 pointer-events-none">
                  <span
                    style="animation-duration: 20s; background-image: linear-gradient(40deg, var(--themeMain), var(--themeSecondary));"
                    class="pointer-events-auto absolute left-0 top-0 h-full w-full animate-spin rounded-full hover:!animation-duration-1000"
                  ></span>
                  <span class="absolute left-[4px] top-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-full bg-auto transition-all"></span>
                  <img
                    src={friend.image}
                    alt="Tan Li Hau"
                    class="absolute left-[7px] top-[7px] h-[calc(100%-14px)] w-[calc(100%-14px)] rounded-full grayscale-[0.1]"
                  />
                </div>
                <p class="text-squada flex gap-4 align-baseline text-xl">
                  {friend.name}
                </p>
                <ul class="max-w-[345px]">
                  {friend.description.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </ul>
              </div>
              <a
                href={friend.link}
                target="_blank"
                rel="noreferrer nofollow"
                class="color"
              >
                <button
                  aria-label="visit"
                  class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details w-full text-sm py-1 px-4"
                >
                  visit
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
