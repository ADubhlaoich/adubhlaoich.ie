const { DateTime } = require("luxon")
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css")
    // eleventyConfig.addWatchTarget("./src/css")
    eleventyConfig.addCollection('projects', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('/src/projects/*.md'))
    })
    eleventyConfig.addCollection('writing', collection => {
        return [...collection.getFilteredByGlob('./src/writing/*.md')].reverse()
    })
    eleventyConfig.addCollection('featuredProjects', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/projects/*.md')).filter(x => x.data.featured)
    })
    eleventyConfig.addCollection('featuredWriting', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/writing/*.md')).filter(x => x.data.featured)
    })
    eleventyConfig.addFilter('asPostDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
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
