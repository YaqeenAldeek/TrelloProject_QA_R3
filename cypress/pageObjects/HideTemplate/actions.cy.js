class hideTemplateActions{

    clickOnAnHideFromListButton(){

        cy.findByTestId("card-back-archive-button").click()
    }

}

export default hideTemplateActions ;