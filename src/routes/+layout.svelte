<script lang="ts">
  import Footer from "$src/lib/footer.svelte"
  import Header from "$src/lib/header.svelte"
  import Head from "$src/lib/head.svelte"
  import { browser } from "$app/environment"
  import { afterNavigate, beforeNavigate } from "$app/navigation"
  import posthog from "posthog-js"
  import "../app.css"

  let { children } = $props()

  if (browser) {
    beforeNavigate(() => posthog.capture("$pageleave"))
    afterNavigate(() => posthog.capture("$pageview"))
  }
</script>

<Head />

<div class="container mx-auto mt-10 px-5 md:px-0">
  <Header />

  <div class="prose prose-slate dark:prose-invert max-w-none my-10">
    {@render children()}
  </div>

  <Footer />
</div>
