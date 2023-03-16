import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Summery } from "~/components/Summery";
import { Main } from "~/components/Main";

export default component$(() => {
  // const mouse = useSignal({
  //   x: 0,
  //   y: 0,
  // });
  // useOn(
  //   "mousemove",
  //   $((event: Event) => {
  //     const e = event as MouseEvent;
  //     mouse.value.x = e.clientX;
  //     mouse.value.y = e.clientY;
  //     document.getElementById("tooltip")!.style.transform = `translate(${
  //       mouse.value.x - 20
  //     }px, ${mouse.value.y - 10}px)`;
  //     document.getElementById("tooltip")!.style.opacity = "1";
  //   })
  // );
  return (
    <div class="w-full bg-auto text-font transition-all">
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
