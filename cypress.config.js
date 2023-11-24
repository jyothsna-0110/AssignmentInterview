const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    flipKart_Url: "https://www.flipkart.com"
  },


  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Test Execution Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    code: true,
  },

  e2e: {
    defaultCommandTimeout: 30000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/*.js",
  },
  video: false,
});