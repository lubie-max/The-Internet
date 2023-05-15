class HomePOM {

getAddRemoveElementBTN(){

   return cy.get('ul > :nth-child(2) > a')
}
}

export default HomePOM;