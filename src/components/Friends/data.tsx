import type { JSXChildren } from "@builder.io/qwik";

export type FriendsT = {
  name: JSXChildren;
  image: string;
  description: JSXChildren[];
  link: string;
};

export const data: FriendsT[] = [
  {
    name: "Deyaa Bozan",
    image: "https://avatars.githubusercontent.com/u/71646355?v=4",
    description: ["Central Trade & Auto Co", "Full Stack Developer 😎"],
    link: "https://github.com/deyaa-pozan",
  },
  {
    name: "Bara'a Al-Osaily",
    image: "https://avatars.githubusercontent.com/u/81553898?v=4",
    description: ["Capella Solutions", "Software Developer 🌯"],
    link: "https://github.com/baraaAlosaily",
  },
  {
    name: "Rahaf Al-Jazzazi",
    image: "https://avatars.githubusercontent.com/u/83532535?v=4",
    description: ["Intrasoft Middle East", "Frontend Developer 👩‍🎨"],
    link: "https://github.com/RahafJ96",
  },
  {
    name: "Ghadeer Khasawneh",
    image: "https://avatars.githubusercontent.com/u/83525457?v=4",

    description: ["Sociumtech", "Fullstack Developer 👷‍♀️"],
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
    description: ["OPTIMIZA", "Fullstack Developer 🍕"],
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
    description: ["MBC Shahid", "Java Developer 🎮"],
    link: "https://www.linkedin.com/in/majd-khasawneh-687695192/",
  },
  {
    name: "Hadi Aji",
    image: "https://avatars.githubusercontent.com/u/70090253?v=4",
    description: ["Avertra", "Software Developer 🤓"],
    link: "https://github.com/Hadeaji",
  },
];
