<script lang="ts">
  import {socialLinks} from "$lib/helpers/navigation"

  const date = new Date()
</script>

<footer>
  <section class="flex flex-row justify-between">
    <div>
      <p>
        &copy;{date.getUTCFullYear()} by Andy Parker
      </p>
      <p>
        You can also find me at <a class="underline hover:font-bold" href={socialLinks["linkedin"].url}>{socialLinks["linkedin"].name}</a>
      </p>
    </div>
  </section>

</footer>
