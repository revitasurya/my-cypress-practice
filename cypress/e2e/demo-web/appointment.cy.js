// web demo -> https://katalon-demo-cura.herokuapp.com/
//declaration

const web = "https://katalon-demo-cura.herokuapp.com/";
const username = "John Doe";
const password = "ThisIsNotAPassword";

//main function
describe("Katalon Demo App", () => {
  beforeEach(() => {
    cy.visit(`${web}`);
  });

  it("Do login", () => {
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type(`${username}`);
    cy.get("#txt-password").type(`${password}`);
    cy.get("#btn-login").click();

    //assert
    cy.get("h2").should("contain.text", "Make Appointment");
  });
});
