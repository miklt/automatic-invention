describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    cy.get('[id="formulario_todo"]')
      .type('alguma tarefa nova')
      .should('have.value', 'alguma tarefa nova')
    cy.get('[id="formulario_todo_button"]').click()
  })
})
