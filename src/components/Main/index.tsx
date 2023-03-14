import { component$ } from "@builder.io/qwik";

export const Main = component$(() => {
  return (
    <div class="flex flex-col gap-6">
      <div class="sticky top-0 left-0 z-10 flex h-[48.7px] justify-end overflow-x-auto border-b border-details bg-auto px-2 transition-all md:px-4">
        <div class="flex items-center gap-3 md:gap-2">
          <div class="flex items-center gap-3 md:gap-2">
            <button class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details text-xs py-1 px-2">EN</button>
            <button class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details text-xs py-1 px-2 !bg-main text-misc-font hover:bg-main">AR</button>
            <button
              aria-label="accessibility"
              class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details hidden md:flex  text-xs py-1 px-2"
            >
              <svg
                width="16px"
                height="16px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="fill-font transition-all"
              >
                <path
                  fillrule="evenodd"
                  d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                  cliprule="evenodd"
                ></path>
              </svg>
            </button>
            <span class="h-6 w-6 rounded-full md:h-5 md:w-5 bg-font transition-all"></span>
            <span class="h-6 w-6 rounded-full md:h-5 md:w-5 bg-gradient-to-tr from-main to-secondary transition-all"></span>
          </div>
        </div>
      </div>
    </div>
  );
});
