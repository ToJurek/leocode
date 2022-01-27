import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

When("User types {string} in search field", (query) => {
  cy.get("input[data-cy=search-filter]").type(query);
});
Given("Valid data will be returned", () => {
  cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
    fixture: "usersResponse.json",
  });
});
Given("User goes to main page", () => {
  cy.visit("/");
});
Given("The list is visible", () => {
  cy.get("ul").should("be.visible");
});
Then("List contains {string} items", (count) => {
  cy.get("li").should("have.length", count);
});
Given("Invalid response will be returned", () => {
  cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
    statusCode: 500,
  });
});
Then("Error alter is visible", () => {
  cy.get("div").contains("Error").should("be.visible");
});
