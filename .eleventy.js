module.exports = function(eleventyConfig) {
    const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js")
    eleventyConfig.addPassthroughCopy("src/css")
    eleventyConfig.addWatchTarget("src/css")
    eleventyConfig.addCollection('projects', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('/src/projects/*.md'))
    })
    eleventyConfig.addCollection('featuredProjects', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('/src/projects/*.md')).filter(x => x.data.featured)
    })
    eleventyConfig.addCollection('writing', collection => {
        return [...collection.getFilteredByGlob('/src/writing/*.md')].reverse()
    })
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
