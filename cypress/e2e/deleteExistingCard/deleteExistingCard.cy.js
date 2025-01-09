/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import deleteCardActions from "../../pageObjects/deleteExistingCard/actions.cy";
import deleteCardAssertions from "../../pageObjects/deleteExistingCard/assertions.cy";
import dataUtils  from "../../support/datautils.cy";
import sharedActions  from "../../pageObjects/shared/actions.cy";
import {boardName,cardName,listName} from "../../support/constant.cy";


// const boardName = "R3-board"
// const cardName = "My card" ;
// const listName = "Yaqeen List" ;

let boardUrl   ,cardId , boardId, cardUrl , idList ;

const dataUtil = new dataUtils();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();
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
    dataUtil.createCard(cardName,idList).then((response)=>{
      cardUrl = response.body.url
      cardId = response.body.id
  })
 })


Given("The user navigate to the board",()=>{
    sharedAction.openBoard(boardUrl)
    cy.wait(5000)
    cy.screenshot({capture:"fullPage"})
})

When("Clicks on an existing card",()=>{

    sharedAction.clickOnAnExistingCard();
})

When("Clicks on archive button on actions list",()=>{
    deleteCardAction.clickOnAnArchiveButton()
})

When("Clicks on Delete button",()=>{
    deleteCardAction.clickOnDeleteButton().clickOnPopUpDeleteButton();

})

Then("The card will be deleted successfully",()=>{

    sharedAction.clickOnCloseIcon()
    deleteCardAssertion.checkListIsNotContainCard(cardName)
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
    cy.wait(3000)

})