const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
  specPattern: "**/*.{feature,cy.js}",
  baseUrl:"http://trello.com/",
  chromeWebSecurity:false,
  setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber());
  },
  screenshotOnRunFailure:true,
  screenshotsFolder:"MyScreenShotsFolder",
  trashAssetsBeforeRuns:true,
  },
});