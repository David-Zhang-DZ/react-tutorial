/* globals cy */

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
  });

  it ('opens with Fall CS courses', () => {
    cy.visit ('/');
    cy.get('[data-cy=course]').should('contain', 'Fall CS');
  });
})