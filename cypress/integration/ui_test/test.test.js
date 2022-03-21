/// <reference types="Cypress" />

describe("UI Test", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.fixture("user_login").then((user) => {
      cy.login(user.email, user.password);
    });
  });
  it("should be able to login", () => {
    cy.url().should("include", "/login");
    cy.contains("RESELL").should("be.visible");
    cy.get(".flex > .items-center").should("be.visible");
  });

  it("should show the add product form after login", () => {
    cy.get('[placeholder="product name.."]').should("be.visible");
  });

  it("should be able to add a product", () => {
    cy.get('[placeholder="product name.."]').type("test product");
    cy.get('[placeholder="price.."]').type("100");
    cy.get(".flex-grow").type("test description");
    cy.get(".flex > .items-center").click();
    cy.contains("test product").should("be.visible");
  });
});
