const { sanityClient } = require("../utils/sanityClient.js");

module.exports = async function () {
  //console.log("Fetching parties...");
  //console.log("process.env.SANITY_PROJECT_ID", process.env.SANITY_PROJECT_ID);
  //console.log("process.env.SANITY_DATASET", process.env.SANITY_DATASET);
  const parties = await sanityClient.fetch(`*[_type == 'politicalParty']`);
  //console.log("parties", parties);
  return parties;
};
