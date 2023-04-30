require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const createClient = require("@sanity/client").createClient;

//console.log("process.env.SANITY_PROJECT_ID", process.env.SANITY_PROJECT_ID);

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-04-29", // use current date (YYYY-MM-DD) to target the latest API version
});

module.exports = { sanityClient };
