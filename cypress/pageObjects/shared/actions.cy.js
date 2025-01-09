
class sharedActions{
    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }
    clickOnAnExistingCard(){
        cy.findByTestId("card-name").first().click()
        return this;
    }

    clickOnCloseIcon(){
        cy.findByTestId("CloseIcon").first().click()
        return this ;

    }
}

export default sharedActions ;