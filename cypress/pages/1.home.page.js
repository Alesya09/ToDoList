class HomePage{

    get headerToDoList() { return cy.get('[class="title_title__mJ8OQ"]') }
    get btnAddTask() { return cy.get('[type="button"]') }
    get emptyTodosTask() { return cy.get('[class="app_emptyText__11zUS"]') }
    get tableOnTheHomePage() { return cy.get('.app_content__wrapper__Mm7EF') }
    get rowTableOnTheHomePage() { return cy.get('[class="todoItem_item__fnR7B"]') }
    get checkBoxToDoTask() { return cy.get('[class="todoItem_svgBox__z1vm6"]') }
    get btnEdit_DeleteRow1() { return cy.get('div:nth-of-type(1) > .todoItem_todoActions__CuQMN > div') }
    get taskComplete() { return cy.get('[class="todoItem_texts__-ozZm"]')}


}

export default new HomePage()
