import posthog from "posthog-js"
import { browser } from "$app/environment"
import { PUBLIC_ENVIRONMENT, PUBLIC_POSTHOG_API_KEY } from "$env/static/public"
import type { PageLoad } from "./$types"


export const load: PageLoad = async () => {
  if (browser) {
    posthog.init(
      PUBLIC_POSTHOG_API_KEY,
      {
        api_host: "https://eu.i.posthog.com",
        person_profiles: "always",
        capture_pageview: false,
        capture_pageleave: false,
        autocapture: PUBLIC_ENVIRONMENT === "production"
      }
    )
  }
}
