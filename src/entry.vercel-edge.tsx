import {
  createQwikCity,
  type PlatformVercel,
} from "@builder.io/qwik-city/middleware/vercel-edge";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import { inject } from "@vercel/analytics";

import render from "./entry.ssr";

declare global {
  interface QwikCityPlatform extends PlatformVercel {}
}

export default createQwikCity({ render, qwikCityPlan, manifest });

inject({ mode: "production" });
