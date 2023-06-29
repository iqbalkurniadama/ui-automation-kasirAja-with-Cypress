describe('testing Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // negative scanario
  it('email and password not filled', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('"email" is not allowed to be empty')
  })

  it('email is correct but password is wrong', () => {
    cy.get('#email').type('test@gmail.com')
    cy.get('#password').type('321')
    cy.get('button[type="submit"]').click()
    cy.contains('Kredensial yang Anda berikan salah')
  })

  it('password is correct but email is wrong', () => {
    cy.get('#email').type('test123@gmail.com')
    cy.get('#password').type('123')
    cy.get('button[type="submit"]').click()
    cy.contains('Kredensial yang Anda berikan salah')
  })

  // positive scanario
  it('success login', () => {
    cy.get('#email').type('test@gmail.com')
    cy.get('#password').type('123')
    cy.get('button[type="submit"]').click()
    cy.contains('h3', 'kasirAja')
    cy.wait(2000)
  })
})