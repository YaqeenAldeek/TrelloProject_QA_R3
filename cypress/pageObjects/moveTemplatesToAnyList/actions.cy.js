class moveTemplatesToAnyListActions{

    clickOnAnMoveButton(){

        cy.findByTestId("card-back-move-card-button").click({force: true})
        return this;
        
    }
    clickOnDropDownList(DoingOptionList){

        cy.findByTestId("move-card-popover-select-list-destination").click()
        return this ;

    }

    clickOnDropDownListDoingOption(DoingOptionList){

      cy.get('#react-select-3-option-2 > li').click()
      return this ;

    }

    clickOnMoveButton(){
        
        cy.findByTestId("move-card-popover-move-button").click()
        return this ;

    }

}
export default moveTemplatesToAnyListActions ;