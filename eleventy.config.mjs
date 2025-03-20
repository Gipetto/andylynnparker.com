import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.addPassthroughCopy("src/favicon.svg")
  eleventyConfig.addPassthroughCopy("src/robots.txt")
  eleventyConfig.addPassthroughCopy("src/humans.txt")
  
  eleventyConfig.watchIgnores.add("src/scss/**/*.scss")

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: [ "webp" ],
    widths: [ 500, "auto" ],
    hashLength: 16,
    svgShortCircuit: true,
    // transformOnRequest: process.env.ELEVENTY_RUN_MODE === "serve",
    transformOnRequest: false
  })
  
  eleventyConfig.setServerOptions({
    watch: [
      "_site/css/**/*.css"
    ]
  })

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      layouts: "_layouts",
    }
  }
}
