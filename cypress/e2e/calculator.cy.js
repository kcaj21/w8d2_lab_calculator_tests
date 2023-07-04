describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the result of the operations', () => {
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })
  it('should chain multiple operations together', () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should display positive numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1')
  })

  it('should display decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '1.3')
  })

  it('should display very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '1e+210')
  })

  it('should divide numbers by zero and return zero', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })



})