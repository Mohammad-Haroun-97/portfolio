import { component$ } from "@builder.io/qwik";

export const ScrollDown = component$(() => {
  return (
    <div class="absolute w-screen h-screen">
      <div class="mouse md:hidden absolute mx-auto"></div>
    </div>
  );
});
