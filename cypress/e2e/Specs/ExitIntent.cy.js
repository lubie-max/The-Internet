/// <reference types="Cypress" />


import EntryAdOM from "../PageObjectModels/EntryAdOM"

describe('Entry Ad Window', function(){

    const POM = new EntryAdOM()
   
    it('should display Entry Ad window', function(){

        cy.visit(Cypress.env('baseUrl')+"exit_intent")

        // Cypress doesn't support mouse events. Therefore checked for hidden modal windows.

        cy.get('.modal').should('be.hidden')


        
    })

   
})