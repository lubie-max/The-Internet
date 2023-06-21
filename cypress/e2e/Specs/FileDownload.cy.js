/// <reference types="Cypress" />

const fs = require('fs');

// import EntryAdOM from "../PageObjectModels/EntryAdOM"
import "cypress-downloadfile/lib/downloadFileCommand";
// import { event } from 'cypress/types/jquery';

import "cypress-downloadfile/lib/downloadFileCommand";

describe("Download", function () {
  // const POM = new EntryAdOM()

  it("Download File", function () {
    cy.visit(Cypress.env("baseUrl") + "download");

    // cy.readFile("cypress/downloads/foto2.png", "base64").should("exist");

    // .then((logo)=>{
    //   cy.log(logo)
    // })

    // cy.log(`${Cypress.env('baseUrl')}`+`${href}`)

    cy.get("a").eq(4).as("target");

    cy.get("@target")
      .invoke("attr", "href")
      .then((href) => {
        cy.log("Href attribute value:", href);
        cy.log(`${Cypress.env("baseUrl")}` + href);
        const url = `${Cypress.env("baseUrl")}` + href;

        const downloadPath = 'cypress/downloads'

        cy.request( {url:url, method: "GET",  encoding: 'binary'}).then(response=>{
            cy.log("Response",response.status)

            // cy.get('@target').click({force:true})  //this is loading the new page and due to the timeout it fails
            
            expect(response.status).to.equal(200)
            cy.log("Download URL is working!")

        })

     

          // code to check weather the file is downloaded or not. 
        // const element = url.slice(url.lastIndexOf("/") + 1);
        // cy.log(element);

        // cy.readFile(`cypress/downloads/${element}`, "base64").should("exist");

        // cy.downloadFile(`${Cypress.env('baseUrl')}`+ href)

        // .then(()=>{
        //     cy.readFile('cypress/downloads/foto2.png','base64').should('exist')

        // })





      });
  });

  // it(" Second Scinario", ()=>{

  //   cy.visit(Cypress.env("baseUrl") + "download");
  //   cy.get("a").eq(6).as('target')

  //   cy.get("@target")
  //   .invoke("attr", "href")
  //   .then((href)=>{
  //       const url = `${Cypress.env("baseUrl")}` + href

  //       cy.intercept('GET', url).as('fileDownload')

  //       cy.get('@target').click()
  //       // cy.debug()

  //       cy.wait('@fileDownload').then((intercept)=>{
  //           cy.log(intercept.response)
  //       cy.debug()

  //       })

  //   })
  // })
});
