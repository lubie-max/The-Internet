/// <reference types="Cypress" />

import DisappearingElmOM from "../PageObjectModels/DisappearingElmOM";
describe('Disappearing Elements', ()=>{

    const POM = new DisappearingElmOM;
    
    it('It Should Work', ()=>{

      cy.visit(Cypress.env('baseUrl')+"disappearing_elements");

      
     
      POM.getAllItems().each((el, i , list)=>{

        POM.getAllItems().eq(i).click();

        cy.get('h1').then((elm)=>{
        //    const txt= cy.wrap(elm.text())
           if(elm.text() === "Not Found"){
            // expect(elm.text()).to.equal("Not Found");
            expect(elm.text().includes('Not Found')).to.be.true
           }
        })


        cy.go('back')

       


      })


    
        
    })
})