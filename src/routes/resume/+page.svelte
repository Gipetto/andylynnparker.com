<script lang="ts">
  import resume from "$lib/files/ALP Resume 2025.pdf"
  import { onMount } from "svelte"
  import PDFObject from "pdfobject"

  onMount(() => {
    const pdfDiv = document.getElementById("resume-pdf")
    PDFObject.embed(resume, pdfDiv)
  })
</script>
<h1 class="text-heading-1 font-bold">Resume</h1>
<div class="h-dvh">
  <div id="resume-pdf" class="w-full h-full"></div>
</div>
