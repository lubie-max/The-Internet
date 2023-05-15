class AddRemoveElmOM{

   clickAddElm(){
    return  cy.get('button').click()
   } ;
   clickRemoveElm(){
       return  cy.get('#elements > :nth-child(1)').click()
      }
}

export default AddRemoveElmOM;