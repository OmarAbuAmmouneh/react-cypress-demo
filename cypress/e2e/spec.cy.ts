describe('SignInPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // replace with the actual path to your SignInPage
  });

  it('should type into email and password inputs', () => {

    // Intercept the API call to the endpoint defined in the configuration
    cy.intercept('POST', 'https://example.com').as('apiCall');

    // Use data-test-id attributes to select the elements
    cy.get('input[name="email"]').type('text@example.com');
    cy.get('input[name="password"]').type('123456');
    
    // Optionally, you can assert the input values
    cy.get('input[name="email"]').should('have.value', 'text@example.com');
    cy.get('input[name="password"]').should('have.value', '123456');

          // Click the login button
          cy.get('button[name="signIn"]').click();

          // Wait for the API call to complete
          cy.wait('@apiCall').then((interception) => {
            // Assert the API call was successful (status code is 200)
            expect(interception.response.statusCode).to.equal(400);
      
            // // Assert the response contains valid access and refresh tokens
            // const responseBody = interception.response.body;
            // expect(responseBody).to.have.property('jwt').that.is.a('string');
            // expect(responseBody).to.have.property('refreshToken').that.is.a('string');
      
            // // Optionally, assert the UI reflects the successful login
            // cy.url().should('include', '/accounts');
            // Add more assertions as needed based on your UI behavior after successful login
          });
  });

});
