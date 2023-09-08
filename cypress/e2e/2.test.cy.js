/// <reference types="Cypress" />

describe('Create a ToDo task', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('1.Verify pop up window after click Add Task',() => {

    cy.get('[type="button"]').should('have.text','Add Task').and('be.visible')
    cy.get('[type="button"]').click()
    cy.get('.modal_form__9A5Bj').should('be.visible')
    cy.get('.modal_formTitle__dyssK').should('have.text', 'Add TODO')
    cy.get('label[for="title"]').should('have.text', 'Title')
    cy.get('label[for="type"]').contains('Status')
    cy.get('button[type="submit"]').contains('Add Task').and('be.visible')
    cy.get('button[type="button"]').contains('Cancel').and('be.visible')
    cy.get('.modal_closeButton__Fg7AM').should('be.visible').click('topRight')
    })

    it.only('2.Create first task',() => {

    cy.get('[type="button"]').should('have.text','Add Task').click()
    cy.get('[id="title"]').type('Wash my car')
    cy.get('[id="type"]').select('Completed')
    cy.get('select#type').should('have.value', 'complete');
    cy.get('button[type="submit"]').contains('Add Task').click()

    cy.get('[type="button"]').should('have.text','Add Task').click()
    cy.get('[id="title"]').type('Buy food for cat')
    cy.get('[id="type"]').select('Incomplete')
    cy.get('select#type').should('have.value', 'incomplete');
    cy.get('button[type="submit"]').contains('Add Task').click()
    
    cy.get('.todoItem_item__fnR7B').should('be.visible')
    
    })

})
