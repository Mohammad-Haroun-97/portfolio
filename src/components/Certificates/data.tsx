import type { JSXChildren } from "@builder.io/qwik";

export type CertificateT = {
    name: JSXChildren;
    comapny: JSXChildren;
    logo: string;
    alt: string;
    badge: {
      href: string;
      src: string;
      alt: string;
    };
    description: JSXChildren[];
  };

export const data: CertificateT[] = [
    {
      name: "Codefellows Advanced Software Development",
      comapny: "Codefellows",
      logo: "/icons/CodeFellowsBadge.svg",
      alt: "CodeFellows Logo",
      badge: {
        href: "https://drive.google.com/file/d/11gQrq2hcCnX0sYQ96iq9FTR5ejGb1abB/view",
        src: "/icons/CodeFellowsBadge.svg",
        alt: "Codefellows Badge",
      },
      description: [
        "Fundamental concepts of AWS cloud computing, including the benefits, different deployment models, and the global infrastructure.",
        "Recognize the AWS shared responsibility model, security and compliance processes, and access management.",
        "AWS core services and their features, as well as the basic architecture of AWS.",
        "AWS billing and pricing models, account structures, and cost optimization practices.",
        "Understand the different support plans available to AWS customers, as well as the various documentation and training resources available."
      ],
    },
    {
      name: "Bachelor of Mechanical Engineering",
      comapny: "Jordan University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Jordan_Logo.svg/1616px-University_of_Jordan_Logo.svg.png",
      alt: "AWS Logo",
      badge: {
        href: "https://drive.google.com/file/d/1nOmG73unFV2uvqg2K1CXwN9uLjl82_z3/view?pli=1",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Jordan_Logo.svg/600px-University_of_Jordan_Logo.svg.png",
        alt: "AWS Badge",
      },
      description: [
        "Fundamental concepts of AWS cloud computing, including the benefits, different deployment models, and the global infrastructure.",
        "Recognize the AWS shared responsibility model, security and compliance processes, and access management.",
        "AWS core services and their features, as well as the basic architecture of AWS.",
        "AWS billing and pricing models, account structures, and cost optimization practices.",
        "Understand the different support plans available to AWS customers, as well as the various documentation and training resources available."
      ],
    },
    {
        name: "IELTS",
        comapny: "Unihouse",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWewP5ftfW-R4SoBZSieWoyQzKuiac8k5zg&s",
        alt: "ielts Logo",
        badge: {
            href: "https://drive.google.com/file/d/1i65oCiosAoYXpSh4kQn983tFrxnLzYws/view",
            src: "https://www.liblogo.com/img-logo/ie4461j5da-ielts-logo-jpbt-tech.png",
            alt: "ielts Badge",
        },
        description: [
            "Fundamental concepts of AWS cloud computing, including the benefits, different deployment models, and the global infrastructure.",
            "Recognize the AWS shared responsibility model, security and compliance processes, and access management.",
            "AWS core services and their features, as well as the basic architecture of AWS.",
            "AWS billing and pricing models, account structures, and cost optimization practices.",
            "Understand the different support plans available to AWS customers, as well as the various documentation and training resources available."
        ],
    },
  ];