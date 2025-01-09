/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import createCardTemplateActions from "../../pageObjects/createCardTemplate/actions.cy";
import createCardTemplateAssertions from "../../pageObjects/createCardTemplate/assertions.cy";
import dataUtils from "../../support/datautils.cy"
import sharedActions  from "../../pageObjects/shared/actions.cy";
import {boardName,cardTemplateName} from "../../support/constant.cy";

let boardUrl , boardId;
const dataUtil = new dataUtils();
const createCardTemplateAction = new createCardTemplateActions();
const createCardTemplateAssertion = new createCardTemplateAssertions();
const sharedAction = new sharedActions();


before(()=>{
    // create a board in trello 
    dataUtil.createBoard(boardName)
    .then((response)=>{
        boardUrl = response.body.url
        boardId = response.body.id
    })
    cy.loginToTrello()

})

Given("The user navigate to the board",()=>{
    sharedAction.openBoard(boardUrl)
})

When("Clicks on Create from template button",()=>{
    createCardTemplateAction.clickOnAddACardTemplateButton();

})

When("Clicks on Create a new template button in card templates list",()=>{
    createCardTemplateAction.clickOnCreateANewTemplateButton()
})

When("Types a card templates title",()=>{
    createCardTemplateAction.TypeACardTemplateTitle(cardTemplateName);
})

When("Clicks on Add button to add card templates",()=>{
    createCardTemplateAction.clickOnAddNewCardTemplate()
})

Then("The card templates will be created successfully",()=>{

    createCardTemplateAssertion.checkThePopPageForCardTemplateAppeare()
    sharedAction.clickOnCloseIcon()
    createCardTemplateAssertion.checkListIsContainCardTemplate(cardTemplateName)

})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
    cy.wait(3000)

})