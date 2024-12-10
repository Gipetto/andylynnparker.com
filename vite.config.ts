import { defineConfig } from "vitest/config"
import { sveltekit } from "@sveltejs/kit/vite"

const production = process.env.NODE_ENV === "production"

export default defineConfig({
  build: {
    manifest: true,
    sourcemap: true,
    minify: production,
    cssMinify: production
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      }
    }
  },
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
})
