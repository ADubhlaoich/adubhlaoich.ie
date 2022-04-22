module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy(".src/css");
    eleventyConfig.addWatchTarget(".src/css")
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
