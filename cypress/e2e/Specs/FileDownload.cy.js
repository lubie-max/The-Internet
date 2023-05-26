/// <reference types="Cypress" />


import EntryAdOM from "../PageObjectModels/EntryAdOM"

describe('Download', function(){

    const POM = new EntryAdOM()
   
    it('Download File', function(){

        cy.visit(Cypress.env('baseUrl')+"download")

        // Cypress doesn't support mouse events. Therefore checked for hidden modal windows.

        cy.get('[href="download/luminoslogo.png"]').click()

        
    })

   
})