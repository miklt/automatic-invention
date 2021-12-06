describe('Casos de Testes de Funcionalidade', () => {
  /** */
  it('deve carregar a página', () => {
    cy.visit('http://localhost:3000/')
  })
  // Conteúdo
  it('deve mostrar "Mais uma Todo..." na aba principal', () => {
    cy.title().should('eq', 'Mais uma Todo...')
  })
  it('deve mostrar "Mais uma Todo..." no como título da página', () => {
    cy.get('h1').should('have.text', 'Mais uma Todo...')
  })

  it('deve ter 3 tarefas iniciais', () => {
    cy.get('[id="listaTodos"]').children().should('have.length', 3)
  })
  //Estética
  it('deve mostrar o título na familia de fontes mono space, que contem a fonte Courier New', () => {
    cy.get('h1')
      .should('have.css', 'font-family')
      .and('match', /Courier/)
  })

  it('deve mostrar o título com uma largura de fonte 700 (negrito)', () => {
    cy.get('h1').should('have.css', 'font-weight', '700')
  })
  it('deve mostrar o título com background em amarelo', () => {
    cy.get('h1').should('have.css', 'background-color', 'rgb(253, 230, 138)')
  })

  // Interface

  /** */
  it('deve preencher o formulário e incluir "Tarefa Nova"', () => {
    const tarefa = 'Tarefa Nova'
    cy.get('[id="formulario_todo"]').type(tarefa).should('have.value', tarefa)
    cy.get('[id="formulario_todo_button"]').click()
  })
  /** */
  it('deve conter 4 elementos após a inclusão', () => {
    cy.get('[id="listaTodos"]').children().should('have.length', 4)
  })
  /** */
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
  /** */
  it('deve ter três elementos após a eliminação do primeiro', () => {
    cy.get('[id="listaTodos"]').children().should('have.length', 3)
  })
  it('deve mostrar mensagem de lista vazia após eliminação das tarefas', () => {
    const mensagem = 'a Todo-List está vazia, adicione uma tarefa...'
    for (let i = 0; i < 3; i++) {
      cy.get('[id="listaTodos"]')
        .children()
        .first()
        .children()
        .last()
        .children()
        .last()
        .click()
    }
    cy.get('[id="listaVazia"').should('contain', mensagem)
  })
})
