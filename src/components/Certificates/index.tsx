import { component$ } from "@builder.io/qwik";
import type { CertificateT } from "./data";
import { data } from "./data";

export const Certificates = component$(() => {
  const certificates: CertificateT[] = data;
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
            <li key={certificate.comapny?.toString()} class="flex flex-col md:flex-row justify-start w-full gap-6 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
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
                  <a href={certificate.badge.href} target="_blank">
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
