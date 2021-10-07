describe('Navigation', () => {
  it('deve carregar a página', () => {
    cy.visit('http://localhost:3000/')
  })
  it('deve ter 3 elementos iniciais', () => {
    cy.get('[id="listaTodos"]').children().should('have.length', 3)
  })
  it('deve incluir uma tarefa nova', () => {
    cy.get('[id="formulario_todo"]')
      .type('alguma tarefa nova')
      .should('have.value', 'alguma tarefa nova')
    cy.get('[id="formulario_todo_button"]').click()
  })

  it('deve conter 4 elementos após a inclusão', () => {
    cy.get('[id="listaTodos"]').children().should('have.length', 4)
  })
  it('deve eliminar a primeira tarefa', () => {
    cy.get('[id="listaTodos"]')
      .children()
      .first()
      .children()
      .last()
      .children()
      .last()
      .click()
  })
  it('deve ter três elementos após a eliminação do primeiro', () => {
    cy.get('[id="listaTodos"]').children().should('have.length', 3)
  })
})
