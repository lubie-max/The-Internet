/// <reference types="Cypress" />

import InfiniteScrollingOM from "../PageObjectModels/InfiniteScrollingOM";

describe("Infinite scrolling", function () {
  const POM = new InfiniteScrollingOM();

  it("should scroll accordingly", function () {
    cy.visit(Cypress.env("baseUrl") + "infinite_scroll");

  
    const checkNewContent = () => {
      cy.get('#page-footer').should('be.visible');
    };


    // cy.scrollTo('bottom',{duration: 3000})
    POM.scrollTo('bottom')

    checkNewContent()

    // cy.scrollTo('top',{duration: 3000});
    POM.scrollTo('top')

    cy.get('#page-footer')

   
  });
});
