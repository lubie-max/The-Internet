class DisappearingElmOM{
    getAllItems(){
        return cy.get('li > a') ;
    }
    getHeader(){
        return cy.get('h1');
    }
}


export default DisappearingElmOM ;