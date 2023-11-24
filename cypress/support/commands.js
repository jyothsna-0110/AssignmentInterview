import htmlTablePage from "../pageObjects/htmlTablePage"

//---This is a re-usable custom command for login into application and verifying the Page header should be visible
Cypress.Commands.add('loginToFlipkart',(url)=>{
    cy.visit(url);
})