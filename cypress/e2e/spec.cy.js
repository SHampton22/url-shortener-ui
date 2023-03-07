describe('URL Shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'example'})
    cy.visit('http://localhost:3000/')
  })

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('section').find('.url').should('have.length', 1)
    cy.get('.url').contains('Awesome photo')
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.get('form')
    cy.get('[placeholder="Title..."]')
    cy.get('[placeholder="URL to Shorten..."]')
    cy.get('button')
  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get('[placeholder="Title..."]')
    .type('Test').should('have.value', 'Test')
    cy.get('[placeholder="URL to Shorten..."]')
    .type('This is a long url').should('have.value', 'This is a long url')
    cy.get('button')
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    cy.get('[placeholder="Title..."]')
    .type('Test').should('have.value', 'Test')
    cy.get('[placeholder="URL to Shorten..."]')
    .type('This is a long url').should('have.value', 'This is a long url')
    cy.get('button').click()
    cy.get('section').find('.url').should('have.length', 2)
    cy.get('section > :nth-child(1)').contains('Awesome photo')
    cy.get('section > :nth-child(2)').contains('Test')

  })

})