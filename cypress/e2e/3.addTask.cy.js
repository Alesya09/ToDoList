/// <reference types="Cypress" />
import HomePage from "../pages/1.home.page"
import TaskPage from "../pages/2.task.page"
import { taskTitle } from "../helper/CSV"

describe('Create and verify a ToDo task', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fixture("ToDoList.json").as("ToDoListData")

    })

    it('Create the first task and verify exist on home page', function () {

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

// verify exist on home page
    HomePage.tableOnTheHomePage
    .find('.todoItem_item__fnR7B') // Select the rows within the container
    .should('have.length', 3)

//  verify name ToDo List on home page
    HomePage.rowTableOnTheHomePage.should('be.visible')
        this.ToDoListData.ToDoList.forEach(($el) =>
            cy.get('[class="todoItem_item__fnR7B"]').should('contain', `${$el}`)
    )
// verify color task if Incomplete status
HomePage.rowTableOnTheHomePage.should('be.visible') 
    HomePage.checkBoxToDoTask.eq(0)
        .should('have.css', 'background-color', 'rgb(222, 223, 225)')

// verify color task if Complete status
    HomePage.checkBoxToDoTask.eq(1)
        .should('have.css', 'background-color', 'rgb(100, 111, 240)')
    
    HomePage.taskComplete.contains('Wash my car')
     .invoke('css', 'text-decoration')
     .should('contain', 'line-through')
    })
})
