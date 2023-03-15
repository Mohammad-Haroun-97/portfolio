import { component$ } from "@builder.io/qwik";

export const Knowledge = component$(() => {
  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 text-sm font-semibold md:text-base">📚 Knowledge</h2>
        <ul class="flex flex-col gap-6 pl-1">
          <li>
            <p class="list-disc-custom flex text-sm">Backend</p>
            <ul class="flex flex-wrap gap-1 pt-2">
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/JavaIcon.svg"
                      width="24"
                      height="24"
                      alt="java logo"
                    />
                  </span>
                  <span>Java</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/SpringIcon.svg"
                      width="24"
                      height="24"
                      alt="spring logo"
                    />
                  </span>
                  <span>SpringBoot</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/NodeIcon.svg"
                      width="24"
                      height="24"
                      alt="node logo"
                    />
                  </span>
                  <span>NodeJS</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/ExpressIcon.svg"
                      width="24"
                      height="24"
                      alt="express logo"
                    />
                  </span>
                  <span>ExpressJS</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/NestJSIcon.svg"
                      width="24"
                      height="24"
                      alt="nest logo"
                    />
                  </span>
                  <span>NestJS</span>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <p class="list-disc-custom flex text-sm">Frontend</p>
            <ul class="flex flex-wrap gap-1 pt-2">
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/ReactIcon.svg"
                      width="24"
                      height="24"
                      alt="react logo"
                    />
                  </span>
                  <span>ReactJs</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/NextjsIcon.svg"
                      width="24"
                      height="24"
                      alt="next logo"
                    />
                  </span>
                  <span>NextJs</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/TailwindIcon.svg"
                      width="24"
                      height="24"
                      alt="tailwind logo"
                    />
                  </span>
                  <span>Tailwind</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/QwikIcon.svg"
                      width="24"
                      height="24"
                      alt="qwik logo"
                    />
                  </span>
                  <span>QwikJs</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
});
