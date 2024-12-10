<script lang="ts" context="module">
  import favicon from "$src/lib/images/favicon.svg"

  const DEFAULT_TITLE = "Andy Lynn Parker / Copywriter"
  const DEFAULT_DESCRIPTION = "Experienced copywriter specializing in Growth Marketing."
  const DEFAULT_KEYWORDS = [
    "Andy Parker",
    "Andy Lynn Parker",
    "Copywriter",
    "Content Strategist",
    "Growth Marketer",
    "Growth Marketing",
    "Acquisitions",
    "Brand Marketing",
    "Brand Copywriter",
    "Brand Strategist",
    "Product Marketing",
    "Product Copywriter",
    "Creative Copywriter"
  ]
</script>
<script lang="ts">
  import { page } from "$app/stores"

  let currentPageUrl: typeof $page.url
  page.subscribe((value) => {
    currentPageUrl = value.url
  })
</script>

<svelte:head>
  <title>{DEFAULT_TITLE}</title>
  <link rel="icon" type="image/svg+xml" href={favicon} />
  <link rel="canonical" href={currentPageUrl.href} />
  <meta name="description" content={DEFAULT_DESCRIPTION} />
  <meta name="keywords" content={DEFAULT_KEYWORDS.join(" ")} />
  <meta property="og:site_name" content={DEFAULT_TITLE} />
  <meta property="og:title" content={DEFAULT_TITLE} />
  <meta property="og:description" content={DEFAULT_DESCRIPTION} />
  <meta property="og:image" content={favicon} />
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="1024">
</svelte:head>
