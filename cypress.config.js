const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.simplyhealth.co.uk/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter" : "mochawesome",
    "reporterOptions" :{
      "reportDir" : "cypress/reports",
      "reportFilename" : "report",
      "overwrite" : true,
      "html" : true,
      "json" : true,
      "charts" : true
    }
  },

  env : {
    createPetUrl : 'https://petstore.swagger.io/v2/pet',
    getPetUrl : 'https://petstore.swagger.io/v2/pet/1090',
    deletePetUrl : 'https://petstore.swagger.io/v2/pet/1090'
  }
});
