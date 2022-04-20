module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy(".src/css");
    eleventyConfig.addWatchTarget(".src/css")
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
