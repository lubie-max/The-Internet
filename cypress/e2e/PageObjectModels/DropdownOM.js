class DropdownOM{

    getAndSelect(){

        return  cy.get('#dropdown').select(2)
    }
}

export default DropdownOM;