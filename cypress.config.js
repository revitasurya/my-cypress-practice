const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "igcg6z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  viewportWidth: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    runMode: 2,
  },
});
