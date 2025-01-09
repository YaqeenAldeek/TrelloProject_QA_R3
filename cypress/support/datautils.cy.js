import { APIKey,APIToken} from "../support/constants.cy";
class dataUtils {

    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard =(boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }

    createList = (boardId,listName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`)
    }
    createCard = (cardName,idList)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?key=${APIKey}&token=${APIToken}&name=${cardName}&idList=${idList}`)
    }
    createTemplateCard = (cardTemplateName,idList)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?key=${APIKey}&token=${APIToken}&name=${cardTemplateName}&idList=${idList}&isTemplate=true`)
    }

}
  
export default dataUtils;