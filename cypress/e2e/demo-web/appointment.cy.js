// web demo -> https://katalon-demo-cura.herokuapp.com/
//declaration

const web = "https://katalon-demo-cura.herokuapp.com/";

//function
const doLogin = () => {
  cy.fixture("account").then((account) => {
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type(`${account.username}`);
    cy.get("#txt-password").type(`${account.password}`);
    cy.get("#btn-login").click();

    //assert
    cy.get("h2").should("contain.text", "Make Appointment");
    cy.url().should(
      "eq",
      "https://katalon-demo-cura.herokuapp.com/#appointment"
    );
  });
};

//main function
describe("Katalon Demo App", () => {
  beforeEach(() => {
    cy.visit(`${web}`);
    doLogin();
  });

  it("Make appointment", () => {
    cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");
    cy.get("#chk_hospotal_readmission").click();
    cy.get("#txt_visit_date").type("27/09/2023").click();
    cy.get("#radio_program_medicaid").check("Medicaid");
    cy.get("#txt_comment").type("testing");
    cy.contains("Book Appointment").click();

    //assert
    cy.contains("Appointment Confirmation").should("exist");
    cy.get("#facility").should("include.text", "Tokyo CURA Healthcare Center");
    cy.get("#hospital_readmission").should("include.text", "Yes");
    cy.get("#program").should("include.text", "Medicaid");
    cy.get("#visit_date").should("include.text", "27/09/2023");
    cy.get("#comment").should("include.text", "testing");
  });
});
