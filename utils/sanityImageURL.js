const imageUrl = require("@sanity/image-url");
const { sanityClient } = require("./sanityClient.js");

function sanityImageUrlFor(source, width) {
  return imageUrl(sanityClient).image(source).width(width).url();
}

module.exports = { sanityImageUrlFor };
