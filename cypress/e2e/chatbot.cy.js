describe("Chatbot Test", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000"); 
  });

 
  it("should check if the input box exists", () => {
    cy.get("input[type='text']").should("exist");
  });

  
  it("should check if the send button exists", () => {
    cy.get("button[type='submit']").should("exist");
  });

  
  it("should type a question and display a response", () => {
    cy.get("input[type='text']")
      .should("exist")
      .type("What was the average sales of Amazon in the year 2015?");

    cy.get("button[type='submit']").click(); // Click send button

    cy.get(".bot-response") // Check if chatbot response appears
      .should("exist")
      .should("not.be.empty"); // Ensure response is not empty
  });

});
