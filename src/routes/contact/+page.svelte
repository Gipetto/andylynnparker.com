<script lang="ts">
  import { socialLinks } from "$src/lib/helpers/navigation"

</script>
<h1>Contact</h1>

<section class="w-full grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-0">
  <div class="order-1 md:order-0">
    <form method="POST">
      <fieldset>
        <div class="my-5">
          <label class="block text-gray-600" for="name">Name</label>
          <input
            class="w-full focus:ring-2 focus:ring-offset-1 transition"
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            pattern="^(.|\s)*\S(.|\s)*$"
            required
          />
        </div>
        <div class="my-5">
          <label class="block text-gray-600" for="name">Email</label>
          <input
            class="w-full focus:ring-2 focus:ring-offset-1 transition"
            type="email"
            id="email"
            name="email"
            placeholder="jane@example.com"
            required
          />
        </div>
        <div class="my-5">
          <label class="block text-gray-600" for="message"
            >Leave me a Message</label
          >
          <textarea
            class="w-full focus:ring-2 ring-offset-0 focus:ring-offset-1 transition"
            placeholder="..."
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div class="text-right">
          <button
            class="hover:bg-gray-500 bg-gray-950 text-white font-bold py-1 px-3"
            >Submit Form</button
          >
        </div>
      </fieldset>
    </form>
  </div>
  <div class="order-0 md:order-1">
    <p>Send me a message and I'll get back to you.</p>
  </div>
</section>

<style lang="postcss">
  /* this can be done with Tailwind psuedo class support, it just makes a monster line of classes */
  input:not(:placeholder-shown):invalid,
  textarea:not(:placeholder-shown):invalid {
    border-color: red;
    outline-color: red;
  }
  /* input:focus:invalid,
  textarea:focus:invalid {
    border-color: blue;
    outline-color: blue;
  } */
</style>
