const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.simplyhealth.co.uk/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env : {
    createPetUrl : 'https://petstore.swagger.io/v2/pet',
    getPetUrl: 'https://petstore.swagger.io/v2/pet/1090'
  }
});
