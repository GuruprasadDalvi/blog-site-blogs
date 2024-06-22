const { defineConfig } = require("cypress");

module.exports = defineConfig({
  codeCoverage: true,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },
});
