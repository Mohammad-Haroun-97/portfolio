import {
  $,
  component$,
  useOn,
  useOnDocument,
  useOnWindow,
  useSignal,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Summery } from "~/components/Summery";
import { Main } from "~/components/Main";

export default component$(() => {
  // const changePointerXY = $((event: Event) => {
  //   const e = event as MouseEvent;
  //   const x = e.pageX;
  //   const y = e.pageY;
  //   document.getElementById("tooltip")!.style.transform = `translate(${
  //     x - 20
  //   }px, ${y - 10}px)`;
  //   document.getElementById("tooltip")!.style.opacity = "1";
  // });

  // useOn("mousemove", changePointerXY);

  return (
    <div class="w-full bg-auto text-font transition-all">
      {/* <span
        id="tooltip"
        style="mix-blend-mode: var(--mix-blend); position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(462px, 217px);"
        class="pointer-events-none z-50 h-10 w-10 items-center rounded-full bg-secondary opacity-cursor transition-opacity"
        data-popper-placement="bottom"
      ></span> */}
      <div class="container mx-auto flex w-full max-w-[1280px] flex-col pt-5 md:flex-row md:px-6 md:pt-24">
        {/* <ScrollDown /> */}
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
