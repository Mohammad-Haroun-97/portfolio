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
      name: "AWS Certified Cloud Practitioner",
      comapny: "Amazon",
      logo: "/icons/AWSIcon.svg",
      alt: "AWS Logo",
      badge: {
        href: "https://www.credly.com/badges/6db6a0d6-2e3f-4614-a3f5-cbb5a09aca22/public_url",
        src: "/images/CCPBadge.png",
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
  ];