import AddRemoveElmOM from "../PageObjectModels/AddRemoveElmOM"

describe('add elm', () => {

    const POM = new AddRemoveElmOM()
it("Add Remove Element", () => {

    cy.visit(Cypress.env('baseUrl')+"add_remove_elements/")

    // cy.log(Cypress.env('baseUrl' )+"add_remove_elements")
    cy.log("Testing")
    POM.clickAddElm()

    cy.wait(2000)
    POM.clickRemoveElm()
    cy.get('#elements').should('be.hidden')


}

)

},
)
