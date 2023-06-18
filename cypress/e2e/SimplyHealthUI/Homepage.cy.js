import {homePageLocators, HomePageLocators} from "./HomePageLocators"

describe('Navigate to 1-2-3 health Plan Page from homepage',() =>
{

    beforeEach(() => {

        cy.launchSimplyHealthPageAndAccceptCookies({cacheSession: false})
    })

    it('Click on Get a health Plan button on the homepage',() => {
        //Click on Get a Health Plan button
        cy.get(homePageLocators.getAHealthPlan).click()
        //Verify you are on The 1-2-3 Health Plan section
        cy.title().should('include','1-2-3 Health Plan | Health cover from Simplyhealth')
        cy.screenshot()
    })
    it('Navigate to Dental Plans from homepage',() => {
        //Click on Dental Plan Button
        cy.get(homePageLocators.dentalPlan).click()
        //Verify you are on Dental Plan Page
        cy.title().should('include','Dental Insurance Plans UK | Simplyhealth')
        cy.screenshot()
    })

    it('Navigate to myAccount from homepage',() => {
        //Click on myAccount Button
        cy.get(homePageLocators.myAccount).click()
        //Verify you are on Consumer Portal Page
        cy.title().should('include','Simplyhealth - Consumer Portal')
        cy.screenshot()
    })
})