import { component$ } from "@builder.io/qwik";
import { CertificateT, data } from "../Certificates/data";

export const Summery = component$(() => {
  const certificates: CertificateT[] = data;
  return (
    <div class="relative mb-12 flex w-full flex-col gap-4 px-2 md:mb-0 md:w-min md:p-3 md:px-4">
      <div class="relative mx-auto overflow-hidden w-72 h-72 md:w-[296px] md:h-[296px] pointer-events-none">
        <span
          id="animatedImage"
          class="absolute left-0 top-0 h-full w-full animate-spin rounded-full duration-20000"
        ></span>
        <span class="absolute left-[4px] top-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-full bg-auto transition-all"></span>
        <img
          src="/images/IMG_0912-Photoroom.jpg"
          alt="Haroun Profile Picture"
          class="absolute left-[7px] top-[7px] h-[calc(100%-14px)] w-[calc(100%-14px)] rounded-full grayscale-[0.1]"
        />
      </div>
      <span class="top-[312px] left-0 z-20 flex w-full flex-col bg-auto p-3 text-center transition-all md:absolute md:text-left">
        <span class="text-2xl font-semibold">Mohammad Haroun</span>
        <span class="text-lg">3 years and 6 months of experience</span>
      </span>
      <div class="sticky top-0 left-0 flex flex-col gap-4">
        <span class="z-10 hidden md:flex mb-2 h-[48.7px] items-center gap-2 border-b border-details bg-auto p-2 transition-all">
          <div class="relative h-9 w-9 pointer-events-none">
            <span
              id="hiddenHeaderBar"
              class="absolute left-0 top-0 h-full w-full animate-spin rounded-full duration-1000"
            ></span>
            <span class="absolute  rounded-full bg-auto transition-all"></span>
            <img
              src="/images/IMG_0912-Photoroom.jpg"
              alt="Mohammad Haroun photo"
              class="absolute inset-0.5 h-8 w-8 rounded-full grayscale-[0.1]"
            />
          </div>
          <span class="flex items-baseline gap-2 text-xs">
            <span class="text-sm font-semibold">Mohammad Haroun</span>
          </span>
        </span>
        <a
          href="https://drive.google.com/file/d/1ha5Vxwl1wMipvb3rrRflX5YTYbKqkD4y/view?usp=sharing"
          target="_blank"
          rel="noreferrer nofollow"
          class="flex justify-center"
        >
          <button
            aria-label="Download Resume"
            class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details w-2/3 md:w-full text-sm py-1 px-4"
          >
            Download Resume 📃
          </button>
        </a>
        <span class="flex flex-wrap justify-center md:justify-start">
          <h1 class="text-xl text-center">Frontend Javascript Developer 🔥 (⌐■_■)</h1>
          <h2 class="text-md mt-2 text-left px-6 md:px-0">
            Creating powerful web applications, one stack at a time.
          </h2>
        </span>
        <div class="flex flex-col items-center gap-2 bg-auto transition-all md:items-start">
          <span class="font-semibold">Certificates</span>
          <div class="flex w-80 flex-wrap justify-center gap-3 md:w-full">
            {certificates.map((certficate) => (
              <span
                key={certficate.name?.toString()}
                class="flex items-center justify-center p-1 transition-all hover:scale-110 group"
              >
                <a href={certficate.badge.href} target="_blank">
                  <img
                    src={certficate.badge.src}
                    width="80"
                    height="80"
                    alt="code fellows logo"
                  />
                </a>
                {/* <span
                  class="group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto duration-500 p-1"
                >
                  {certficate.name}
                </span> */}
              </span>
            ))}
          </div>
        </div>
        <div class="flex flex-col items-center gap-1 md:items-start">
          <span class="font-semibold">Contact</span>
          <a
            target="_blank"
            href="mailto:mohammadharoun44@gmail.com"
            class="flex select-all items-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokewidth="1.5"
              stroke="currentColor"
              class="h-4 w-4"
              strokeWidth="1.5"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>mohammadharoun44@gmail.com</span>
          </a>
          <a
            target="_blank"
            href="https://github.com/Mohammad-Haroun-97"
            class="flex items-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokewidth="1.5"
              stroke="currentColor"
              class="h-4 w-4 fill-font transition-all"
              viewBox="0 0 24 24"
            >
              <path
                id="Forma"
                fill-rule="evenodd"
                stroke="none"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span>Github</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohammad-haroun-a231691a2/"
            class="flex items-center gap-2 text-sm"
          >
            <svg
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
              strokewidth="1.5"
              stroke="currentColor"
              class="h-4 w-4 fill-font transition-all"
              q:key="nE_0"
              strokeWidth="1.5"
            >
              <path
                d="M19.479 0L1.58301 0C0.72699 0 0 0.677002 0 1.51099L0 19.488C0 20.323 0.47699 21 1.33301 21L19.229 21C20.086 21 21 20.323 21 19.488L21 1.51099C21 0.677002 20.336 0 19.479 0L19.479 0ZM8 8L10.827 8L10.827 9.44092L10.858 9.44092C11.289 8.66406 12.562 7.875 14.136 7.875C17.157 7.875 18 9.479 18 12.45L18 18L15 18L15 12.9971C15 11.667 14.469 10.5 13.227 10.5C11.719 10.5 11 11.521 11 13.197L11 18L8 18L8 8L8 8ZM3 18L6 18L6 8L3 8L3 18L3 18ZM6.375 4.5C6.375 5.53589 5.53601 6.375 4.5 6.375C3.46399 6.375 2.625 5.53589 2.625 4.5C2.625 3.46411 3.46399 2.625 4.5 2.625C5.53601 2.625 6.375 3.46411 6.375 4.5L6.375 4.5Z"
                id="Forma"
                fill-rule="evenodd"
                stroke="none"
              ></path>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
});
