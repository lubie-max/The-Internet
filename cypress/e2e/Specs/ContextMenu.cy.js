/// <reference types="Cypress" />

import ContextMenuOM from "../PageObjectModels/ContextMenuOM";


describe('Context Menu Suite', ()=>{

    const POM = new ContextMenuOM
    
    it('It Should work', ()=>{
        cy.visit(Cypress.env('baseUrl')+"context_menu");

        POM.GetContextMenu()

        POM.CheckForAlert();
        
    })
})