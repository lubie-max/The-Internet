const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    baseUrl: "https://the-internet.herokuapp.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern:'cypress\e2e\Specs\*js'
      // pageLoadTimeout: '1200',
    },
  },
});
