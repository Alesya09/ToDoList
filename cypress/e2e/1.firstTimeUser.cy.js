/// <reference types="Cypress" />
import HomePage from "../pages/1.home.page"

describe('First time user', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('1.Verify that the site is visible',() => {

    HomePage.headerToDoList.should('have.text', 'TODO List').and('be.visible')
    HomePage.btnAddTask.should('have.text','Add Task').and('be.visible')
    HomePage.emptyTodosTask.should('have.text','No Todos').and('be.visible')

// Verify No Todos list not exsist
    HomePage.emptyTodosTask.should('have.text','No Todos').and('be.visible')

    })
})
