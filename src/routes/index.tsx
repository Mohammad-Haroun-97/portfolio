import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Summery } from "~/components/Summery";
import { Main } from "~/components/Main";

export default component$(() => {
  return (
    <div class="w-full bg-auto text-font transition-all">
      <div class="container mx-auto flex w-full max-w-[1280px] flex-col pt-5 md:flex-row md:px-6 md:pt-24">
        <Summery />
        <Main />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Osaid Alhomedy",
  meta: [
    {
      name: "description",
      content: "Osaid Alhomedy's Portfolio",
    },
  ],
};
