describe("Template test", () => {
  it("should display the 'app/page.tsx'", () => {
    cy.visit("/");

    cy.contains("app/page.tsx").should("be.visible");
  });
});
