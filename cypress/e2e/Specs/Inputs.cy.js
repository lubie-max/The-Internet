/// <reference types="Cypress" />


describe("Inputs", function () {

  it("Numarical  input", function () {
    cy.visit(Cypress.env("baseUrl") + "inputs");

    cy.get('input').should('have.attr',"type").then((type) => {
        expect(type).to.equal("number");
    })

    cy.get('input').type(12)

   
  });
});
