// cypress/integration/promocodes.spec.js

describe("Promocodes Page", () => {
  beforeEach(() => {
    cy.signIn();
    cy.visit("http://localhost:3000/promocodes");
  });
  it("should call a certain GET API", () => {
    const validCredentials = {
      baseUrl: Cypress.env("baseUrl"),
    };

    // Intercept the GET API call
    cy.intercept("GET", `${validCredentials.baseUrl}/promoCodes?*`).as(
      "getPromoCodes"
    );

    // Wait for the GET API call to complete
    cy.wait("@getPromoCodes").then((interception) => {
      // Assert the GET API call was successful (status code is 200)
      expect(interception.response.statusCode).to.equal(200);
      const responseBody = interception.response.body;
      expect(responseBody).to.have.property("total").that.is.a("number");
      expect(responseBody).to.have.property("matches").that.is.a("array");
      const expectedRowCount = interception.response.body.matches.length;
      cy.get(".MuiDataGrid-row").should("have.length", expectedRowCount);
      // Add more assertions based on the response, if needed
    });
  });
  it("Search Promocodes", () => {
    const validCredentials = {
      baseUrl: Cypress.env("baseUrl"),
    };
    cy.get('input[name="searchText"]').type("123");
    // Intercept the GET API call
    cy.intercept("GET", `${validCredentials.baseUrl}/promoCodes?*`).as(
      "getPromoCodes"
    );
    // Wait for the GET API call to complete
    cy.wait("@getPromoCodes").then((interception) => {
      // Assert the GET API call was successful (status code is 200)
      interception.response.body.matches.forEach((match) => {
        expect(match.code).to.include("123");
      });
      // Add more assertions based on the response, if needed
    });
  });

  it("Clear search", () => {
    cy.get('input[name="searchText"]').type("123");
    cy.get('button[name="clear"]').click();
    cy.get('input[name="searchText"]').should("be.empty");
  });

  it("Pagination", () => {
    const validCredentials = {
      baseUrl: Cypress.env("baseUrl"),
    };
    cy.get('button[title="الانتقال إلى الصفحة التالية"]').click();
    // Intercept the GET API call
    cy.intercept("GET", `${validCredentials.baseUrl}/promoCodes?*`).as(
      "getPromoCodes"
    );
    // Wait for the GET API call to complete
    cy.wait("@getPromoCodes").then((interception) => {
        const queryParams = interception.request.url.split('?')[1];
        expect(queryParams).to.include('offset=25');
    });
  });
});
