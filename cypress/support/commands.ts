/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable {
      createInbox(): Chainable<any>;
      signIn(): Chainable<any>;
    }
  }
  

Cypress.Commands.add('signIn', () => {    
    cy.visit("http://localhost:3000"); // replace with the actual path to your SignInPage
      it("should type into email and password inputs", () => {
        const validCredentials = {
          baseUrl: Cypress.env("baseUrl"),
          username: Cypress.env("username"),
          password: Cypress.env("password"),
        };
    
        // Intercept the API call to the endpoint defined in the configuration
        cy.intercept("POST", `${validCredentials.baseUrl}/staff/signin`).as(
          "apiCall"
        );
    
        // Use data-test-id attributes to select the elements
        cy.get('input[name="email"]').type(validCredentials.username, {
          log: false,
        });
        cy.get('input[name="password"]').type(validCredentials.password, {
          log: false,
        });
    
        // Optionally, you can assert the input values
        cy.get('input[name="email"]').should(
          "have.value",
          validCredentials.username,
          { log: false }
        );
        cy.get('input[name="password"]').should(
          "have.value",
          validCredentials.password,
          { log: false }
        );
    
        // Click the login button
        cy.get('button[name="signIn"]').click();
    
        // Wait for the API call to complete
        cy.wait("@apiCall").then((interception) => {
          // Assert the API call was successful (status code is 200)
          expect(interception.response.statusCode).to.equal(200);
    
          // Assert the response contains valid access and refresh tokens
          const responseBody = interception.response.body;
          expect(responseBody).to.have.property("jwt").that.is.a("string");
          expect(responseBody).to.have.property("refreshToken").that.is.a("string");
          cy.setCookie('accessToken', interception.response.body.jwt)    
        });
      })
    })
  
  