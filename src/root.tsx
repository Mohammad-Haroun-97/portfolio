import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { inject } from '@vercel/analytics';

import "./global.css";

export type CTX = {
  theme: "light" | "dark";
  lang: "en" | "ar";
  dir: "ltr" | "rtl";
};

export const Context = createContextId<CTX>("MainContext");

inject();

export default component$(() => {
  const store = useStore<CTX>({
    theme: "light",
    lang: "en",
    dir: "ltr",
  });

  useContextProvider(Context, store);


  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang={store.lang} dir={store.dir} class="overflow-x-hidden">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
