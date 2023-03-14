module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/files");
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
