/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils  from "../../support/datautils.cy";
import sharedActions  from "../../pageObjects/shared/actions.cy";
import hideTemplateActions from "../../pageObjects/HideTemplate/actions.cy"
import hideTemplateAssertions from "../../pageObjects/HideTemplate/assertions.cy";
import {boardName,cardTemplateName,listName} from "../../support/constant.cy";


// const boardName = "R3-board"
// const cardTemplateName = "My card Template" ;
// const listName = "Yaqeen List" ;

let boardUrl   ,cardId , boardId, cardUrl , idList ;

const dataUtil = new dataUtils();
const hideTemplateAction  = new hideTemplateActions();
const hideTemplateAssertion = new hideTemplateAssertions();
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

    sharedAction.openBoard(boardUrl);
})

When("Clicks on an existing template",()=>{

    sharedAction.clickOnAnExistingCard();
})

When("Clicks on Hide from list button on actions list",()=>{

    hideTemplateAction.clickOnAnHideFromListButton();

})

Then("The card will be hidden from list successfully",()=>{
    
    sharedAction.clickOnCloseIcon()
    hideTemplateAssertion.checkListIsNotContainCard(cardTemplateName)
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
    cy.wait(3000)

})