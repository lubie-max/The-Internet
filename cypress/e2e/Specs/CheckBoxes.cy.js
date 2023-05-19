/// <reference types="Cypress" />


describe('Checkbox Suite', ()=>{


    it('It Should work', ()=>{
        cy.visit(Cypress.env('baseUrl')+"checkboxes")

        cy.get('#checkboxes > :nth-child(1)').should('not.be.checked')
        cy.wait(2000)
        // cy.get('#checkboxes > :nth-child(2)').should('be.checked')
        cy.get('[checked=""]').should('be.checked')

        
    })
})