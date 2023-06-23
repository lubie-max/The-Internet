/// <reference types="Cypress" />

import FramesOM from "../PageObjectModels/FramesOM";
import 'cypress-iframe'


describe("Frames", function () {
  const POM = new FramesOM();

  beforeEach(function () {
    cy.visit(Cypress.env("baseUrl") + "frames");
  });

  it(" frames", function () {
    cy.get("ul > :nth-child(2) > a").click();

    // cy.get(".tox-menubar");
    // cy.get(":nth-child(4) > .tox-mbtn__select-label").click();
    // cy.get(".tox-collection__item--active").click();


    cy.frameLoaded("#mce_0_ifr").then(function () {


        cy.iframe("#mce_0_ifr").then(($iframe) => {
    
       
            const iframeDoc = $iframe.contents().get(0);

            cy.wrap(iframeDoc).should('contain.text', "Your content goes here")
            cy.wrap(iframeDoc).type("  \n \b IFrame Document accessed successfully via cypress-iframe.")

            cy.log(iframeDoc.innerText)
         
           
        })

    });

    



  });

  it(" nasted frames ", function () {
    cy.visit(Cypress.env("baseUrl") + "/frame_left");
    POM.checkIfValid();

    //right
    cy.visit(Cypress.env("baseUrl") + "/frame_right");
    POM.checkIfValid();

    cy.get("body").should("be.ok");

    //middle
    cy.visit(Cypress.env("baseUrl") + "/frame_middle");
    POM.checkIfValid();

    cy.get("body").should("be.ok");
  });

});
