const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'igcg6z',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
