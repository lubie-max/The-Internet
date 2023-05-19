/// <reference types="Cypress" />

import ContextMenuOM from "../PageObjectModels/ContextMenuOM";


describe('Digest Auth Suite', ()=>{

    const POM = new ContextMenuOM

    // before(()=>{

    //     // cy.visit({
    //     //     url: 'https://the-internet.herokuapp.com/digest_auth',
    //     //     auth: {
    //     //       username: 'admin',
    //     //       password: 'admin',
    //     //     },
    //     //   });

    // })
    
    it('It Should work', ()=>{

      cy.visit(Cypress.env('baseUrl'));

      cy.get(':nth-child(8) > a').click().then(()=>{

        cy.on('window:',(AlertMsg)=>{
          cy.log('alert',AlertMsg)
        })

      });
        // cy.clearAllCookies()
        // cy.visit(Cypress.env('baseUrl')+"digest_auth", {
        //   onBeforeLoad:(window)=>{
        //     window.alert('digest_auth')
        //   },
        // })


        //     cy.on('window:prompt', (AlertMsg)=>{

        //         cy.log("AlertMsg")
        //     });


       


        // cy.visit({
        //     url: 'https://the-internet.herokuapp.com/digest_auth',
        //     auth: {
        //       username: 'admin',
        //       password: 'admin',
        //     },
        //   });
      
        


        
    })
})