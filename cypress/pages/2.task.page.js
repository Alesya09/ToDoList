class TaskPage{

    get modalWindow() { return cy.get('.modal_form__9A5Bj') }
    get headerModalWindow() { return cy.get('.modal_formTitle__dyssK') }
    get labelTitle() { return cy.get('label[for="title"]') }
    get labelStatus() { return cy.get('label[for="type"]') }
    get btnSubmit() { return cy.get('button[type="submit"]') }
    get btnCancel() { return cy.get('button[type="button"]')}
    get closeIcon() { return cy.get('.modal_closeButton__Fg7AM') }
    get inputTitleTask() { return cy.get('[id="title"]') }
    get getStatusTask() { return cy.get('[id="type"]') }

}

export default new TaskPage()
