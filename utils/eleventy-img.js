const Image = require("@11ty/eleventy-img");

async function eleventyImg(src, alt, sizes) {
  let metadata = await Image(src, {
    outputDir: "_site/img", // Ensure that images get output directly to the built site.
    formats: ["webp", "avif", "jpeg"],
    // Could set widths here, to generate images at different widths for use with "sizes". Example:
    // widths: [300, 600, 900, "auto"], // "auto" is the default.
  });

  let imageAttributes = {
    alt,
    sizes, // For the source tag's sizes attribute. Allowing for media queries select of specific image widths.
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = { eleventyImg };
