//import { beforeEach } from "vitest";

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("passes", () => {
    // cy.visit("http://localhost:5173/");
    cy.get(`input`).type(`un iPhone`);
    cy.get(`textarea`).type(`ivana\njuana\nana`);
    cy.get(`button`).click();
    cy.get(`#winner`).contains(
      /Enhorabuena (Ana|Juana|Ivana) has ganado un iPhone/i
    );
  });

  it("passes", () => {
    // cy.visit("http://localhost:5173/");
    cy.get(`input`).type(`un iPhone`);
    cy.get(`button`).click();
    cy.get(`#winner`).contains(/No hay participantes/i);
  });
});
