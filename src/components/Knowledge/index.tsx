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
                  <span>ReactJS</span>
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
                  <span>NextJS</span>
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
                  <span>QwikJS</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/HtmlIcon.svg"
                      width="24"
                      height="24"
                      alt="html logo"
                    />
                  </span>
                  <span>HTML</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/CssIcon.svg"
                      width="24"
                      height="24"
                      alt="css logo"
                    />
                  </span>
                  <span>CSS</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/JSIcon.svg"
                      width="24"
                      height="24"
                      alt="js logo"
                    />
                  </span>
                  <span>Javascript</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/MaterialUiIcon.svg"
                      width="24"
                      height="24"
                      alt="material ui logo"
                    />
                  </span>
                  <span>Material UI</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/BootstrapIcon.svg"
                      width="24"
                      height="24"
                      alt="bootstrap logo"
                    />
                  </span>
                  <span>Bootstrap</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/ReduxIcon.svg"
                      width="24"
                      height="24"
                      alt="redux logo"
                    />
                  </span>
                  <span>Redux</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/ReactRouterIcon.svg"
                      width="24"
                      height="24"
                      alt="react router logo"
                    />
                  </span>
                  <span>React Router</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/ReactQueryIcon.svg"
                      width="24"
                      height="24"
                      alt="react query logo"
                    />
                  </span>
                  <span>React Query</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/JestIcon.svg"
                      width="24"
                      height="24"
                      alt="jest logo"
                    />
                  </span>
                  <span>Jest</span>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <p class="list-disc-custom flex text-sm">Databases</p>
            <ul class="flex flex-wrap gap-1 pt-2">
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/PostgresIcon.svg"
                      width="24"
                      height="24"
                      alt="postgresql logo"
                    />
                  </span>
                  <span>PostgreSQL</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/MongodbIcon.svg"
                      width="24"
                      height="24"
                      alt="mongodb logo"
                    />
                  </span>
                  <span>MongoDB</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/DynamoDbIcon.svg"
                      width="24"
                      height="24"
                      alt="dynamodb logo"
                    />
                  </span>
                  <span>DynamoDB</span>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <p class="list-disc-custom flex text-sm">Tools</p>
            <ul class="flex flex-wrap gap-1 pt-2">
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/LinuxIcon.svg"
                      width="24"
                      height="24"
                      alt="linux logo"
                    />
                  </span>
                  <span>Linux</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/GitIcon.svg"
                      width="24"
                      height="24"
                      alt="git logo"
                    />
                  </span>
                  <span>Git</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/NpmIcon.svg"
                      width="24"
                      height="24"
                      alt="npm logo"
                    />
                  </span>
                  <span>NPM</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/YarnIcon.svg"
                      width="24"
                      height="24"
                      alt="yarn logo"
                    />
                  </span>
                  <span>Yarn</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/GithubIcon.svg"
                      width="24"
                      height="24"
                      alt="github logo"
                    />
                  </span>
                  <span>Github</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/MavenIcon.svg"
                      width="24"
                      height="24"
                      alt="maven logo"
                    />
                  </span>
                  <span>Maven</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/DockerIcon.svg"
                      width="24"
                      height="24"
                      alt="docker logo"
                    />
                  </span>
                  <span>Docker</span>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <p class="list-disc-custom flex text-sm">Cloud Computing</p>
            <ul class="flex flex-wrap gap-1 pt-2">
              <li>
                <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/AWSIcon3.svg"
                      width="24"
                      height="24"
                      alt="aws logo"
                      class="h-6"
                    />
                  </span>
                  <span>Amazon Web Services</span>
                </span>
              </li>
              <li>
                <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                  <span class="rounded-lg bg-misc p-1 transition-all">
                    <img
                      src="/icons/SAPIcon.svg"
                      width="24"
                      height="24"
                      alt="sap logo"
                      class="w-10 h-6"
                    />
                  </span>
                  <span>SAP Cloud</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
});
