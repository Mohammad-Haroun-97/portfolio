import { component$, JSXChildren, useSignal } from "@builder.io/qwik";

export const Experience = component$(() => {
  const getExperience = (): JSXChildren => {
    const today: Date = new Date();
    const start: Date = new Date(2022, 7, 1);
    const diff: number = today.getTime() - start.getTime();
    const diffMonths: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    return diffMonths.toString();
  };

  const experience = useSignal(getExperience());

  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
          <span class="text-sm font-semibold md:text-base">
            👨‍💻 Work Experience
          </span>
        </h2>
        <ul class="flex flex-wrap gap-6">
          <li class="flex w-full gap-12 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
            <div class="flex flex-col justify-between gap-3">
              <div class="flex items-center gap-2">
                <img
                  src="/images/IntrasoftLogo.jpg"
                  alt="RkPeople Logo"
                  class="h-7 w-7"
                />
                <div class="flex items-baseline gap-2">
                  <p class="flex gap-4 align-baseline font-squada text-sm">
                    Intrasoft MiddleEast
                  </p>
                  <span class="rounded-full border border-details px-2 py-1 text-xs">
                    {experience.value} months
                  </span>
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
              <div class="flex flex-wrap gap-2">
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/JavaIcon.svg"
                    width="24"
                    height="24"
                    alt="java logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/SpringIcon.svg"
                    width="24"
                    height="24"
                    alt="spring logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/PostgresIcon.svg"
                    width="24"
                    height="24"
                    alt="postgresql logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/MavenIcon.svg"
                    width="24"
                    height="24"
                    alt="maven logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/JSIcon.svg"
                    width="24"
                    height="24"
                    alt="javascript logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/ReactIcon.svg"
                    width="24"
                    height="24"
                    alt="react logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/ReduxIcon.svg"
                    width="24"
                    height="24"
                    alt="redux logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/TailwindIcon.svg"
                    width="24"
                    height="24"
                    alt="tailwind logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/PostcssIcon.svg"
                    width="24"
                    height="24"
                    alt="postcss logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/GitIcon.svg"
                    width="24"
                    height="24"
                    alt="git logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/LinuxIcon.svg"
                    width="24"
                    height="24"
                    alt="linux logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/DockerIcon.svg"
                    width="24"
                    height="24"
                    alt="docker logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/AWSIcon.svg"
                    width="24"
                    height="24"
                    alt="sap logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/SAPIcon.svg"
                    width="24"
                    height="24"
                    alt="sap logo"
                  />
                </span>
              </div>
            </div>
          </li>
          <li class="flex w-full gap-12 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
            <div class="flex flex-col justify-between gap-3">
              <div class="flex items-center gap-2">
                <img
                  src="/images/LTUCLogo.png"
                  alt="RkPeople Logo"
                  class="h-7 w-10"
                />
                <div class="flex items-baseline gap-2">
                  <p class="flex gap-4 align-baseline font-squada text-sm">
                    Luminus Technical University College LTUC
                  </p>
                  <span class="rounded-full border border-details px-2 py-1 text-xs">
                    {experience.value} months
                  </span>
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
              <div class="flex flex-wrap gap-2">
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/JavaIcon.svg"
                    width="24"
                    height="24"
                    alt="java logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/SpringIcon.svg"
                    width="24"
                    height="24"
                    alt="spring logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/JSIcon.svg"
                    width="24"
                    height="24"
                    alt="javascript logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/ReactIcon.svg"
                    width="24"
                    height="24"
                    alt="react logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/GitIcon.svg"
                    width="24"
                    height="24"
                    alt="git logo"
                  />
                </span>
                <span class="rounded-lg bg-misc p-1 transition-all">
                  <img
                    src="/icons/LinuxIcon.svg"
                    width="24"
                    height="24"
                    alt="linux logo"
                  />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});
