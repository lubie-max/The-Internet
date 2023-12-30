/// <reference types="Cypress" />


describe('GeoLocation', function() {

    it('should return a GeoLocation object', function() {
        cy.visit(Cypress.env("baseUrl") + "geolocation");

        cy.log("Location object", Cypress.env("baseUrl") + "geolocation");


        cy.get('button').click();

        // cy.get('#map-link').click();

        cy.get('#map-link > a').invoke('attr', 'href').then((href) => {
            
            cy.log(href);
            cy.visit(href)
        });
        
       
       

    });
});

