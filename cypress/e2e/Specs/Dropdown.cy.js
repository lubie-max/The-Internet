/// <reference types="Cypress" />

import DropdownOM from "../PageObjectModels/DropdownOM"
describe("Dropdown", function(){

    const POM = new DropdownOM;

    it("working with dropdown", function(){

        cy.visit(Cypress.env('baseUrl')+"dropdown")

        POM.getAndSelect();
        



    })
})