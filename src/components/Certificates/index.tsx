import type { JSXChildren } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type Certificate = {
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

export const Certificates = component$(() => {
  const certificates: Certificate[] = [
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
  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
          <span class="text-sm font-semibold md:text-base">
            📜 Certificates
          </span>
        </h2>
        <ul class="flex flex-wrap gap-6">
          {certificates.map((certificate) => (
            <li class="flex flex-col md:flex-row justify-start w-full gap-6 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
              <div class="flex flex-col justify-between gap-3">
                <div class="flex items-center gap-2">
                  <img
                    src={certificate.logo}
                    alt={certificate.alt}
                    class="h-7 w-7"
                  />
                  <div class="flex items-baseline gap-2">
                    <p class="flex gap-4 align-baseline font-squada text-sm">
                      {certificate.name}
                    </p>
                  </div>
                </div>
                <ul class="flex flex-col gap-1 pl-1">
                  {certificate.description.map((description) => (
                    <li class="list-disc-custom flex text-sm">
                      <h3>{description}</h3>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="flex items-center justify-center gap-2 w-full sm:w-2/3 md:w-1/2">
                <span class="rounded-lg bg-misc p-1 transition-all hover:scale-110">
                  <a
                    href={certificate.badge.href}
                    target="_blank"
                  >
                    <img
                      src={certificate.badge.src}
                      width="100"
                      height="100"
                      alt="java logo"
                    />
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
