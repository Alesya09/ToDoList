/// <reference types="Cypress" />

describe('First time user', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('1.Verify that the site is visible',() => {

    cy.get('[class="title_title__mJ8OQ"]').should('have.text', 'TODO List').and('be.visible')
    cy.get('[type="button"]').should('have.text','Add Task').and('be.visible')
    // cy.get('select#status').should('have.text','All').and('be.visible')
    cy.get('[class="app_emptyText__11zUS"]').should('have.text','No Todos').and('be.visible')
    })

    it('1.Verify No Todos list not exsist',() => {

    cy.get('[class="app_emptyText__11zUS"]').should('have.text','No Todos').and('be.visible')
    })

})
