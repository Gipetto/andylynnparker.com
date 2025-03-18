export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.addPassthroughCopy("src/favicon.svg")
  eleventyConfig.addPassthroughCopy("src/robots.txt")
  eleventyConfig.addPassthroughCopy("src/humans.txt")
  
  eleventyConfig.watchIgnores.add("src/scss/**/*.scss")
  
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