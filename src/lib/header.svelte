<script lang="ts">
  import {page} from "$app/stores"
  import {getNavLinks} from "./helpers/navigation"

  let route: typeof $page.route
  page.subscribe((value) => {
    route = value.route
  })
</script>

<header>
  <div class="text-center">
    <h1 class="lowercase text-heading-1">Andy Lynn Parker / <span class="font-normal">Copywriter</span></h1>
  </div>
  <nav>
    <ul class="flex flex-row justify-center gap-x-6 mt-2">
      {#each getNavLinks() as link}
        <li>
          <a
            class="hover:font-bold"
            class:active={route.id === link.path}
            href={link.path}>
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="postcss">
  .active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
