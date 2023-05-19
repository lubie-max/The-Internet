/// <reference types="Cypress" />


describe("Broken Images", ()=>{

    it("Broken Images detectaion",()=>{

        cy.visit(Cypress.env('baseUrl')+"broken_images")

        cy.get('.example > img ').each((el, index, list)=>{
                let newElm = cy.wrap(el)

                newElm.invoke('attr', 'src').then((atrVal)=>{
                    // cy.log(atrVal)

                    if (atrVal.includes('img')) {
                    cy.log("This is not a broken image")
                    
                            }
                    else{
                    cy.log("This is  a broken image")

                    }

                });
           

        })

    })
})