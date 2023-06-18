**SimplyHealthUI and PetStore Automated Tests**

Web e2e automated tests for [https://www.simplyhealth.co.uk/]. API e2e automated tests for petstore.swagger.io.

Cypress was selected as the main tool for the framework due to its execution speed, simple use, and easiness in debugging. 

**First Time Set-Up**

1. Clone the repo:
git clone 


2. Install NVM.

Then use NVM to get the supported Node version (v14.16.0) running:
nvm use

Or simply install the supported Node version here.
Install dependencies running:
npm i

**Running Tests**

**Locally**

npm run test-full
This will run all tests in a headless chrome browser and generate raw json and mochawesome reports in the cypress/reports directory. 

**In CI/CD**

The project is set up to run tests in a Github Actions job on every commit pushed.

**Results**
This will generate an HTML report in cypress/reports.

**Web Tests - Simply Health UI Scenarios**

1.Given a user navigates to Simply Health homepage
When a user clicks on health Plan button 
Then the user is taken to the The 1-2-3 Health Plan section

2.Given a user navigates to Simply Health homepage
When a user clicks on Dental Plan Button 
Then the user is taken to the Dental Plan Page

3.Given a user navigates to Simply Health homepage
When a user clicks on myAccount Button button 
Then the user is taken to the Consumer Portal Page


**API Tests - PetStore**

**Specs:**

**Pet CRUD:**
A user should be able to add a pet to the store, read its data, update it and delete it.
Selection of Tests
For the API test scenarios, the focus was given to the CRUD operations of Pet. 

**Next Steps:**

Add UI performance tests using a Google lighthouse Cypress plugin such as cypress-audit.
Add contract tests using a Cypress plugin such as cypress-swagger-validation.
Add visual tests using a Cypress plugin such as cypress-image-snapshot.
