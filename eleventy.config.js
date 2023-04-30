const { sanityImageUrlFor } = require("./utils/sanityImageURL.js");
const { eleventyImg } = require("./utils/eleventy-img.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("sanityImageUrlFor", sanityImageUrlFor);
  eleventyConfig.addPairedShortcode("image", eleventyImg);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // Nunjucks templating for .md and .html files.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "content",
      includes: "../_includes", // relative to dir.input
      data: "../_data", // relative to dir.input
      output: "_site",
    },
  };
};
