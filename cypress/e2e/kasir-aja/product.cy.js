describe('add product', () => { 
  beforeEach(() => {
    cy.login('test@gmail.com', '123')
  })

  // negative scenario
  it('failled add product - harga jual tidak susuai harga beli', () => {
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('.chakra-button').click()
    cy.get('#nama').type('ayam bakar')
    cy.get('#deskripsi').type('makanan enak')
    cy.get("input[id='harga beli']").type(10000)
    cy.get("input[id='harga jual']").type(9000)
    cy.get('#stok').type(10)
    cy.get('#kategori').click()
    cy.get('.css-u3dlpe').click()
    cy.get('.chakra-button').click()
    cy.get("div[role='alert']").contains('div', '"price" must be greater than ref:cost').should('be.visible')
    cy.wait(2000)
  });

  // positive scenario
  it('success add product', () => {
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('.chakra-button').click()
    cy.get('#nama').type('ayam bakar')
    cy.get('#deskripsi').type('makanan enak')
    cy.get("input[id='harga beli']").type(10000)
    cy.get("input[id='harga jual']").type(15000)
    cy.get('#stok').type(10)
    cy.get('#kategori').click()
    cy.get('.css-u3dlpe').click()
    cy.get('.chakra-button').click()
    cy.get('.css-njbp03 > #toast-1-title').should('be.visible')
    cy.wait(2000)
  });
})

describe('edit product', () => {
  beforeEach(() => {
    cy.login('test@gmail.com','123')
  })

  // negative scenario
  it('failled edit product - nama product tidak di isi', () => {
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('#menu-button-21').click()
    cy.get('#menu-list-21-menuitem-18').click()
    cy.get('#nama').clear()
    cy.get('#deskripsi').clear().type('makanan lezat')
    cy.get("input[id='harga beli']").clear().type(15000)
    cy.get("input[id='harga jual']").clear().type(20000)
    cy.get('#stok').clear().type(15)
    cy.get('#kategori').click()
    cy.get('.css-u3dlpe').click()
    cy.get('.chakra-button').click()
    cy.get("div[role='alert']").contains('div', '"name" is not allowed to be empty').should('be.visible')
    cy.wait(2000)
  })

  // positive scenario
  it('success edit product', () => {
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('#menu-button-21').click()
    cy.get('#menu-list-21-menuitem-18').click()
    cy.get('#nama').clear().type('ayam goreng')
    cy.get('#deskripsi').clear().type('makanan lezat')
    cy.get("input[id='harga beli']").clear().type(15000)
    cy.get("input[id='harga jual']").clear().type(20000)
    cy.get('#stok').clear().type(15)
    cy.get('#kategori').click()
    cy.get('.css-u3dlpe').click()
    cy.get('.chakra-button').click()
    cy.get('.css-njbp03 > #toast-1-title').should('be.visible')
    cy.wait(2000)
  })
})

describe('delete product', () => {
  beforeEach(() => {
    cy.login('test@gmail.com','123')
  })

  it('success delete product', () => {
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('#menu-button-21').click()
    cy.get('#menu-list-21-menuitem-19').click()
    cy.get('.chakra-button.css-n45e6f').click()
    cy.get('.css-njbp03 > #toast-1-title').should('be.visible')
  })
})