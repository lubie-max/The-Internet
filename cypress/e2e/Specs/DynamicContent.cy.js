/// <reference types="Cypress" />

import DropdownOM from "../PageObjectModels/DropdownOM"
describe("Dynamic Content", function(){

    const POM = new DropdownOM;

    it("working with dropdown", function(){

        cy.visit(Cypress.env('baseUrl')+"dynamic_content")


        cy.get(':nth-child(3) > a').click()
        
        // or 

        cy.url().visit(Cypress.env('baseUrl')+"dynamic_content"+"?with_content=static"); 



    })
})