

class FloatingMenuOM{

    getMenuList(){

        return cy.get('ul> li > a')
    }

    checkIfFloatingMenuWorks(text){
      return  cy.url().then((url)=>{

            expect(url).to.contains(text.toLowerCase())
            cy.log(url)
            })
    }


}

export  default FloatingMenuOM