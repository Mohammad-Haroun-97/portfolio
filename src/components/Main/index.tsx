import { component$ } from "@builder.io/qwik";
import { Experience } from "../Experiance";
import { Friends } from "../Friends";
import { Knowledge } from "../Knowledge";

export const Main = component$(() => {
  return (
    <div class="flex flex-col gap-6 w-full">
      <div class="sticky flex justify-center md:justify-end top-0 left-0 z-10 h-[48.7px] overflow-x-auto border-b border-spacing-3 border-details bg-auto px-2 transition-all md:px-4">
        <span id="cat" class="absolute mr-10" />
      </div>
      <div class="flex flex-col gap-9 px-4 pb-32">
        <Experience />
        {/* <Certificates /> */}
        <Knowledge />
        <Friends />
      </div>
    </div>
  );
});
