/// <reference types="Cypress" />

import HomePage from "../pages/1.home.page"
import TaskPage from "../pages/2.task.page"

describe('Create a ToDo task', () => {

    beforeEach(() => {
        cy.visit('/')

    })
    it('Verify dialog window after click Add Task',() => {

    HomePage.btnAddTask.should('have.text','Add Task').and('be.visible')
    HomePage.btnAddTask.should('have.text','Add Task').click()
    TaskPage.modalWindow.should('be.visible')
    TaskPage.headerModalWindow.should('have.text', 'Add TODO')
    TaskPage.labelTitle.should('have.text', 'Title')
    TaskPage.labelStatus.contains('Status')
    TaskPage.btnSubmit.contains('Add Task').and('be.visible')
    TaskPage.btnCancel.contains('Cancel').and('be.visible')
    TaskPage.closeIcon.should('be.visible').click('topRight')

//  verify Cancel button on the dialog window
    HomePage.btnAddTask.should('have.text','Add Task').click()
    TaskPage.btnCancel.contains('Cancel').and('be.visible').click()

    })
 })
