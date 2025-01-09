class deleteCardActions {
   
  
    clickOnAnArchiveButton(){
        cy.findByTestId("card-back-archive-button").click()
        return this;
        
    }
    clickOnDeleteButton(){
        cy.findByTestId("card-back-delete-card-button").click()
        return this;
    }
    clickOnPopUpDeleteButton(){
        cy.findByTestId("popover-confirm-button").click()
        return this ;
    }
}
export default deleteCardActions;