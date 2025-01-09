/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import moveTemplatesToAnyListActions from "../../pageObjects/moveTemplatesToAnyList/actions.cy";
import moveTemplatesToAnyListAssertions from "../../pageObjects/moveTemplatesToAnyList/assertions.cy";
import dataUtils  from "../../support/datautils.cy";
import sharedActions  from "../../pageObjects/shared/actions.cy";
import {boardName,cardTemplateName,listName,DoingOptionList} from "../../support/constant.cy";


// const boardName = "R3-board"
// const cardTemplateName = "My card Template" ;
// const listName = "Yaqeen List" ;
// const DoingOptionList =  "Doing"

let boardUrl   ,cardId , boardId, cardUrl , idList ;

const dataUtil = new dataUtils();
const moveTemplatesToAnyListAction = new moveTemplatesToAnyListActions();
const moveTemplatesToAnyListAssertion = new moveTemplatesToAnyListAssertions();
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

When("Clicks on move button  from Actions list button",()=>{

    moveTemplatesToAnyListAction.clickOnAnMoveButton()
})

When("Clicks on drop-down List",()=>{

    moveTemplatesToAnyListAction.clickOnDropDownList(DoingOptionList)

})

When("Clicks on second option",()=>{

    moveTemplatesToAnyListAction.clickOnDropDownListDoingOption(DoingOptionList)

})

When("Clicks on Move button",()=>{

    moveTemplatesToAnyListAction.clickOnMoveButton()

})

Then("The card template will move successfully",()=>{

    sharedAction.clickOnCloseIcon()
    moveTemplatesToAnyListAssertion.checkCardMovedToDoingList(DoingOptionList)

    
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
    cy.wait(3000)

})