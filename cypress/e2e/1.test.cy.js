/// <reference types="Cypress" />

describe('First time user', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('1.Verify that the site is up',() => {

    cy.get('[class="title_title__mJ8OQ"]').should('have.text', 'TODO List')
    cy.get('[type="button"]').should('have.text','Add Task')
    cy.get('[class="app_emptyText__11zUS"]').should('have.text','No Todos')

    })

})
