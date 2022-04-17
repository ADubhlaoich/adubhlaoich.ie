module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/layout.css");
    eleventyConfig.addPassthroughCopy("src/style.css");
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
