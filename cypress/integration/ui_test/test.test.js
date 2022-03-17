/// <reference types="Cypress" />

describe("UI Test", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.fixture("user_login").then((user) => {
      cy.login(user.email, user.password);
    });
  });
  it("should be able to login", () => {
    cy.contains("RESELL").should("be.visible");
    cy.get(".flex > .items-center").should("be.visible");
  });
  // must be fix
  /* it("should be able to logout", () => {
    cy.logout();
  }); */
});
