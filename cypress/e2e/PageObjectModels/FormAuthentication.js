

class FormAuthenticationOM{

    typeUsername(username){
        return cy.get('#username').type(username);
    }

    typePassword(password){
        return cy.get('#password').type(password);
    }

    clickLoginButton(){
        return cy.get('.radius').click();
    }

    checkIfLoggedIn(){
        return cy.get('#flash').should('have.class','success')
    }

}


export default FormAuthenticationOM