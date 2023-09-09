/// <reference types="Cypress" />
import HomePage from "../pages/1.home.page"
import TaskPage from "../pages/2.task.page"
import { taskTitle } from "../helper/CSV"

describe('Delete a ToDo task', () => {

    beforeEach(() => {
        cy.visit('/')

    })

    it.only('Delete a ToDo task and check on the HomePage', function () {

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

    HomePage.btnEdit_DeleteRow1.eq(0).click()
    HomePage.tableOnTheHomePage
    .find('.todoItem_item__fnR7B') // Select the rows within the container
    .should('have.length', 2)

    })
})
