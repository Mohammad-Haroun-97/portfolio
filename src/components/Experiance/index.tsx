import { component$ } from "@builder.io/qwik";
import type { ExperienceT } from "./data";
import { data } from "./data";

export const Experience = component$(() => {

  const experiences : ExperienceT[] = data;

  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
          <span class="text-sm font-semibold md:text-base">
            👨‍💻 Work Experience
          </span>
        </h2>
        <ul class="flex flex-wrap gap-6">
          {experiences.map((experience) => (
            <li key={experience.companyName?.toString()} class="flex w-full gap-12 rounded-md border border-details bg-misc p-6 shadow-sm transition-all">
              <div class="flex flex-col justify-between gap-3">
                <div class="flex items-center gap-2">
                  <img
                    src={experience.companyLogo?.toString()}
                    alt={experience.companyName?.toString()}
                    class={experience.wideCompanyLogo ? "h-7 w-11" : "h-7 w-7"}
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
                        <li key={desc?.toString()} class="list-disc-custom flex">{desc}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  {experience.positionSkills.map((skill) => (
                    <span key={skill.skillAlt?.toString()} class="rounded-lg bg-misc p-1 transition-all">
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
