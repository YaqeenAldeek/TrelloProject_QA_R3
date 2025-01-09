class updateCardAssertions {
    
    checkTemplateCardUpdated(UpdatedCardTitle){
        cy.findByTestId("card-name").should("have.text", UpdatedCardTitle)
        return this;
    }
}
export default updateCardAssertions;