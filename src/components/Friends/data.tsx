import type { JSXChildren } from "@builder.io/qwik";

export type FriendsT = {
  name: JSXChildren;
  image: string;
  description: JSXChildren[];
  link: string;
};

export const data: FriendsT[] = [
  {
    name: "Abdallah Abu Khurma",
    image: "https://avatars.githubusercontent.com/u/79832840?v=4",
    description: ["Arabi Bank","Senior Frontend Developer 😎"],
    link: "https://github.com/AbdallahAbuKhurma",
  },
  {
    name: "Osaid Alhomedy",
    image: "https://avatars.githubusercontent.com/u/83532081?v=4",
    description: ["Network International", "Mid level backend Software Developer 🌯"],
    link: "https://github.com/OsaidAlhomedy",
  },
  {
    name: "Rami Zaitoun",
    image: "https://avatars.githubusercontent.com/u/46257622?v=4",
    description: ["Madfwatkoom", "Software Developer 🐍"],
    link: "https://github.com/MasteRminD6666",
  },
  {
    name: "Rahaf Al-Jazzazi",
    image: "https://avatars.githubusercontent.com/u/83532535?v=4",
    description: ["Intrasoft Middle East", "Frontend Developer 👩‍🎨"],
    link: "https://github.com/RahafJ96",
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
    name: "Rami Zregat",
    image: "https://avatars.githubusercontent.com/u/85101731?v=4",
    description: ["Intrasfot Middle East", "Frontend Developer ☕"],
    link: "https://github.com/RamiZregat",
  },
  {
    name: "Hasnaa",
    image:"https://avatars.githubusercontent.com/u/86597086?v=4",
    description: ["Sociumtech", "Full Stack Developer 🌯"],
    link: "https://github.com/orgs/support-team-codefellows/people/hasnaa38"
  },
  {
    name: "Ghadeer Khasawneh",
    image: "https://avatars.githubusercontent.com/u/83525457?v=4",

    description: ["Sociumtech", "Fullstack Developer 👷‍♀️"],
    link: "https://github.com/GhadeerKh9",
  },
];
