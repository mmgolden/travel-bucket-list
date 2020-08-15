module.exports = {
  client: {
    service: {
      name: "travel-bucket-list",
      // URL to the GraphQL API
      url: process.env.VUE_APP_GRAPHCMS_URL
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};
