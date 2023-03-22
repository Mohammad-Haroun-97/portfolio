import { component$ } from "@builder.io/qwik";
import type { FriendsT } from "./data";
import { data } from "./data";

export const Friends = component$(() => {
  const friends: FriendsT[] = data;

  return (
    <div class="md:scroll-m-16">
      <div>
        <p class="mb-3 text-sm font-semibold md:text-base">
          👏 Developers Worked With
        </p>
        <ul class="flex flex-wrap justify-center gap-y-14 text-center">
          {friends.map((friend) => (
            <li key={friend.name?.toString()} class="flex w-full max-w-[290.66px] flex-col justify-between gap-2 px-0 sm:px-3">
              <div class="flex flex-col items-center gap-2">
                <div class="relative  h-40 w-40 pointer-events-none">
                  <span
                    style="animation-duration: 20s; background-image: linear-gradient(40deg, var(--themeMain), var(--themeSecondary));"
                    class="pointer-events-auto absolute left-0 top-0 h-full w-full animate-spin rounded-full hover:!animation-duration-1000"
                  ></span>
                  <span class="absolute left-[4px] top-[4px] h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-full bg-auto transition-all"></span>
                  <img
                    src={friend.image}
                    alt="Tan Li Hau"
                    class="absolute left-[7px] top-[7px] h-[calc(100%-14px)] w-[calc(100%-14px)] rounded-full grayscale-[0.1]"
                  />
                </div>
                <p class="text-squada flex gap-4 align-baseline text-xl">
                  {friend.name}
                </p>
                <ul class="max-w-[345px]">
                  {friend.description.map((desc) => (
                    <li key={desc?.toString()}>{desc}</li>
                  ))}
                </ul>
              </div>
              <a
                href={friend.link}
                target="_blank"
                rel="noreferrer nofollow"
                class="color"
              >
                <button
                  aria-label="visit"
                  class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details w-full text-sm py-1 px-4"
                >
                  visit
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
