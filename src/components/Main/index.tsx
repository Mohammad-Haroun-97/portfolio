import { component$ } from "@builder.io/qwik";
import { Certificates } from "../Certificates";
import { Experience } from "../Experiance";
import { Knowledge } from "../Knowledge";

export const Main = component$(() => {
  return (
    <div class="flex flex-col gap-6 w-full">
      <div class="sticky top-0 left-0 z-10 flex h-[48.7px] justify-end overflow-x-auto border-b border-details bg-auto px-2 transition-all md:px-4">
        <div class="flex items-center gap-3 md:gap-2">
          <div class="flex items-center gap-3 md:gap-2">
            <button class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details text-xs py-1 px-2">
              EN
            </button>
            <button
              disabled
              class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details text-xs py-1 px-2 !bg-main text-misc-font hover:bg-main"
            >
              AR
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-9 px-4 pb-32">
        <Experience />
        <Certificates />
        <Knowledge />
      </div>
    </div>
  );
});
