/// <reference types="Cypress" />

// import { enter, triggerDrag, release } from 'cypress-real-events';
import DragNDrop from "../PageObjectModels/DragNDropOM";

describe("DragDrop", () => {
  const POM = new DragNDrop();
  it("should work with drag and drop events", () => {

    cy.visit(Cypress.env("baseUrl") + "drag_and_drop");

   
    // cy.get('#columns > :nth-child(1) > header ').should('have.text',"A")
    POM.checkingValidBox();

    // creating dataTransfer object
    const dataTransfer = new DataTransfer

    POM.getColumnA().trigger('dragstart',{
      dataTransfer
    });

    POM.getColumnB().trigger('drop',{
      dataTransfer
    });

    cy.get('#columns > :nth-child(2) > header ').should('have.text',"A")



  });
});
