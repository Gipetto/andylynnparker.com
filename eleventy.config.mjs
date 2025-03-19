import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.addPassthroughCopy("src/favicon.svg")
  eleventyConfig.addPassthroughCopy("src/robots.txt")
  eleventyConfig.addPassthroughCopy("src/humans.txt")
  
  eleventyConfig.watchIgnores.add("src/scss/**/*.scss")

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    hashLength: 16,
    svgShortCircuit: true,
    transformOnRequest: process.env.ELEVENTY_RUN_MODE === "serve"
  })
  
  eleventyConfig.setServerOptions({
    watch: [
      "_site/css/**/*.css"
    ]
  })

  return {
    dir: {
      input: "src",
      layouts: "_layouts",
    }
  }
}
