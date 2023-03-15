import { component$ } from "@builder.io/qwik";

export const Certificates = component$(() => {
  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
          <span class="text-sm font-semibold md:text-base">
            📜 Certificates
          </span>
        </h2>
        <ul class="flex flex-wrap gap-6">
          <li class="flex justify-start w-full gap-6 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
            <div class="flex flex-col justify-between gap-3">
              <div class="flex items-center gap-2">
                <img src="/icons/AWSIcon.svg" alt="AWS Logo" class="h-7 w-7" />
                <div class="flex items-baseline gap-2">
                  <p class="flex gap-4 align-baseline font-squada text-sm">
                    Amazon Web Services
                  </p>
                </div>
              </div>
              <ul class="flex flex-col gap-1 pl-1">
                <li class="list-disc-custom flex text-sm">
                  <h3>
                    Frontend maintenance for web applications related to the
                    telecommunications sector
                  </h3>
                </li>
                <li class="list-disc-custom flex text-sm">
                  <h3>
                    Frontend maintenance for web applications related to the
                    tourism and hotel sector
                  </h3>
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-center gap-2 w-full sm:w-2/3 md:w-1/2">
              <span class="rounded-lg bg-misc p-1 transition-all hover:scale-110">
                <a
                  href="https://www.credly.com/badges/6db6a0d6-2e3f-4614-a3f5-cbb5a09aca22/public_url"
                  target="_blank"
                >
                  <img
                    src="/images/CCPBadge.png"
                    width="100"
                    height="100"
                    alt="java logo"
                  />
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});
