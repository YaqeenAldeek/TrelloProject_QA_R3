/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import updateCardTemplateNameActions from "../../pageObjects/updateCardName/actions.cy";
import updateCardAssertions from "../../pageObjects/updateCardName/assertions.cy";
import dataUtils  from "../../support/datautils.cy";
import sharedActions from "../../pageObjects/shared/actions.cy";
import {boardName,cardTemplateName,listName,UpdatedCardTitle} from "../../support/constant.cy";


let boardUrl   ,cardId , boardId, cardUrl , idList ;

const dataUtil = new dataUtils();
const updateCardTemplateNameAction = new updateCardTemplateNameActions();
const updateCardAssertion = new updateCardAssertions();
const sharedAction = new sharedActions();

before(()=>{
    cy.loginToTrello()
    // create a board in trello 
    dataUtil.createBoard(boardName).then((response)=>{
        boardUrl = response.body.url
        boardId = response.body.id
    })
   // cy.wait(6000)
})

before(()=>{
   // create a lists in trello 
   dataUtil.createList(boardId,listName).then((response)=>{
    idList = response.body.id
    })
 //   cy.wait(6000)
})

before(()=>{

    // create a card in trello 
    dataUtil.createTemplateCard(cardTemplateName,idList).then((response)=>{
      cardUrl = response.body.url
      cardId = response.body.id
  })
 })


Given("The user navigate to the board",()=>{
    sharedAction.openBoard(boardUrl)
})

When("Clicks on a card template",()=>{

    sharedAction.clickOnAnExistingCard();
})

When("Clicks on card title and Types new card template name in card title input field",()=>{

    updateCardTemplateNameAction.clickOnAnCardTitle(UpdatedCardTitle)
})

Then("The card template name will be updated successfully",()=>{

    sharedAction.clickOnCloseIcon()
    updateCardAssertion.checkTemplateCardUpdated(UpdatedCardTitle)

})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
    cy.wait(3000)
})
