describe('SignInPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // replace with the actual path to your SignInPage
  });

  it('should type into email and password inputs', () => {
    const validCredentials = {
      baseUrl: Cypress.env('baseUrl'),
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    };

    // Intercept the API call to the endpoint defined in the configuration
    cy.intercept('POST', `${validCredentials.baseUrl}/staff/signin`).as('apiCall');


    // Use data-test-id attributes to select the elements
    cy.get('input[name="email"]').type(validCredentials.username, {log: false});
    cy.get('input[name="password"]').type(validCredentials.password, {log: false});
    
    // Optionally, you can assert the input values
    cy.get('input[name="email"]').should('have.value', validCredentials.username, {log: false});
    cy.get('input[name="password"]').should('have.value', validCredentials.password, {log: false});

          // Click the login button
          cy.get('button[name="signIn"]').click();

          // Wait for the API call to complete
          cy.wait('@apiCall').then((interception) => {
            // Assert the API call was successful (status code is 200)
            expect(interception.response.statusCode).to.equal(200);
      
            // Assert the response contains valid access and refresh tokens
            const responseBody = interception.response.body;
            expect(responseBody).to.have.property('jwt').that.is.a('string');
            expect(responseBody).to.have.property('refreshToken').that.is.a('string');
      
            // Optionally, assert the UI reflects the successful login
            cy.url().should('include', '/accounts');
          });
  });

  it('Invalid SignIn', () => {
    const validCredentials = {
      baseUrl: Cypress.env('baseUrl'),
    };
    // Intercept the API call to the endpoint defined in the configuration
    cy.intercept('POST', `${validCredentials.baseUrl}/staff/signin`).as('apiCall');

    // Use data-test-id attributes to select the elements
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('123456');
    
    // Optionally, you can assert the input values
    cy.get('input[name="email"]').should('have.value', 'test@example.com');
    cy.get('input[name="password"]').should('have.value', '123456');

          // Click the login button
          cy.get('button[name="signIn"]').click();

          // Wait for the API call to complete
          cy.wait('@apiCall').then((interception) => {
            // Assert the API call was successful (status code is 400)
            expect(interception.response.statusCode).to.equal(400);
          });
  });
});
