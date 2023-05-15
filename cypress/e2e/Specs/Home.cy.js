/// <reference types="Cypress" />

import HomePOM from "../PageObjectModels/HomePOM";

describe('Basic Test suit', () => {
    const homeOM = new HomePOM();

    it("Home page", () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.log(Cypress.env('baseUrl'))/

        cy.log('Testing')

        cy.get('.heading').should('have.text',"Welcome to the-internet")
        // homeOM.getAddRemoveElementBTN().click()

    

    })
})