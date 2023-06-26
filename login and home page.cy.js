// Cypress Login Page Automation Scripts

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://sakshingp.github.io/assignment/login.html');
  });
  it('should display login page elements', () => {
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#log-in').should('be.visible');
  });
  it('should log in with valid credentials', () => {
    cy.get('#username').type('valid_username');
    cy.get('#password').type('valid_password');
    cy.get('.form-check-label').click();
    cy.get('#log-in').click();
    cy.url('https://sakshingp.github.io/assignment/login.html').should('include', '/home');
  });
});

// Cypress Home Page Automation Scripts

describe('Home Page', () => {
  beforeEach(() => {
    // Login with valid credentials before each test
    cy.visit('https://sakshingp.github.io/assignment/login.html');
    cy.get('#username').type('valid_username');
    cy.get('#password').type('valid_password');
    cy.get('.form-check-label').click();
    cy.get('#log-in').click();
  });

  it('should sort values by clicking the AMOUNT header', () => {
    cy.get('#amount').click();
  });
});