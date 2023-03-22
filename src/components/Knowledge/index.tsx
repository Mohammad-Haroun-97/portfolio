import { component$ } from "@builder.io/qwik";
import type { KnowledgeT } from "./data";
import { data } from "./data";

export const Knowledge = component$(() => {
  const knowledges: KnowledgeT[] = data;

  return (
    <div class="md:scroll-m-16">
      <div>
        <h2 class="mb-3 text-sm font-semibold md:text-base">📚 Knowledge</h2>
        <ul class="flex flex-col gap-6 pl-1">
          {knowledges.map((knowledge) => (
            <li key={knowledge.field?.toString()}>
              <p class="list-disc-custom flex text-sm">{knowledge.field}</p>
              <ul class="flex flex-wrap gap-1 pt-2">
                {knowledge.desc.map((desc) =>
                  desc.prefer ? (
                    <li key={desc.name?.toString()}>
                      <span class="flex !min-h-\[44px\] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-gradient-to-tr from-secondary to-main bg-\[length:140%\] text-misc-font transition-all text-gray-100">
                        <span class="rounded-lg bg-misc p-1 transition-all">
                          <img
                            src={desc.image}
                            width="24"
                            height="24"
                            alt={desc.alt}
                            class="h-6"
                          />
                        </span>
                        <span>{desc.name}</span>
                      </span>
                    </li>
                  ) : (
                    <li key={desc.name?.toString()}>
                      <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all">
                        <span class="rounded-lg bg-misc p-1 transition-all">
                          <img
                            src={desc.image}
                            width="24"
                            height="24"
                            alt={desc.alt}
                            class="h-6"
                          />
                        </span>
                        <span>{desc.name}</span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
