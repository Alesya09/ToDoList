/// <reference types="Cypress" />

import HomePage from "../pages/1.home.page"
import TaskPage from "../pages/2.task.page"
import { taskTitle } from "../helper/CSV"

describe('Update a ToDo task', () => {

    beforeEach(() => {
        cy.visit('/')

    })

    it('Edite the task sand verify edited on home page', function () {

// precondition, we need to created tasks before they edited
    HomePage.btnAddTask.should('have.text','Add Task').click()
    TaskPage.inputTitleTask.type(taskTitle.title1)
    TaskPage.getStatusTask.select('Incomplete')
    TaskPage.getStatusTask.should('have.value', 'incomplete');
    TaskPage.btnSubmit.contains('Add Task').click()

    HomePage.btnAddTask.should('have.text','Add Task').click()
    TaskPage.inputTitleTask.type(taskTitle.title2)
    TaskPage.getStatusTask.select('Completed')
    TaskPage.getStatusTask.should('have.value', 'complete');
    TaskPage.btnSubmit.contains('Add Task').click()

    HomePage.btnAddTask.should('have.text','Add Task').click()
    TaskPage.inputTitleTask.type(taskTitle.title3)
    TaskPage.getStatusTask.select('Incomplete')
    TaskPage.getStatusTask.should('have.value', 'incomplete');
    TaskPage.btnSubmit.contains('Add Task').click()

// verify tasks exist on the home page
    HomePage.tableOnTheHomePage
    .find('.todoItem_item__fnR7B') // Select the rows within the container
    .should('have.length', 3)


// we click edit button and Verify dialog window after click Edit button
    HomePage.btnEdit_DeleteRow1.eq(1).click()
    TaskPage.headerModalWindow.should('have.text', 'Update TODO')
    TaskPage.labelTitle.should('have.text', 'Title')
    TaskPage.labelStatus.contains('Status')
    TaskPage.btnSubmit.contains('Update Task').and('be.visible')
    TaskPage.btnCancel.contains('Cancel').and('be.visible')
    TaskPage.closeIcon.should('be.visible').click('topRight')

//  verify Cancel button on the dialog window
    HomePage.btnEdit_DeleteRow1.eq(1).click()
    TaskPage.btnCancel.contains('Cancel').and('be.visible').click()

// we should be edit (title) and click submit button
    HomePage.btnEdit_DeleteRow1.eq(1).click()
    TaskPage.inputTitleTask.clear()
    TaskPage.inputTitleTask.type('Meeting with team')
    TaskPage.btnSubmit.contains('Update Task').click()
 // verify that we see changed on the home page
    HomePage.rowTableOnTheHomePage.contains('Meeting with team').should('be.visible')

// edit first row (status) and click submit button
    HomePage.btnEdit_DeleteRow1.eq(1).click()
    TaskPage.getStatusTask.select('Completed')
    TaskPage.getStatusTask.should('have.value', 'complete');
    TaskPage.btnSubmit.contains('Update Task').click()

//  verify that we see changed on the home page
    HomePage.checkBoxToDoTask.eq(0)
        .should('have.css', 'background-color', 'rgb(100, 111, 240)')

    HomePage.taskComplete.contains('Meeting with team')
    .invoke('css', 'text-decoration')
    .should('contain', 'line-through')

    })
})
