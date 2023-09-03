//declaration
const web = "https://katalon-demo-cura.herokuapp.com/";
const facility = "Tokyo CURA Healthcare Center";
const program = "Medicaid";
const visitDate = "27/09/2023";
const comment = "testing";
let readmission = false;
let readmissionCbox;

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

const checkReadmission = () => {
  if (readmission == true) {
    readmissionCbox = "Yes";
  } else {
    readmissionCbox = "No";
  }
};

//main function
describe("Katalon Demo App", () => {
  beforeEach(() => {
    cy.visit(`${web}`);
    doLogin();
  });

  it("Make appointment", () => {
    cy.get("#combo_facility").select(`${facility}`);
    cy.get("#chk_hospotal_readmission").then(($a) => {
      if (`${readmission}` == true) {
        cy.get("#chk_hospotal_readmission").click();
      } else {
        cy.get("#chk_hospotal_readmission");
      }
    });
    cy.get("#txt_visit_date").type(`${visitDate}`).click();
    cy.get("#radio_program_medicaid").check(`${program}`);
    cy.get("#txt_comment").type(`${comment}`);
    cy.contains("Book Appointment").click();

    //assert
    cy.contains("Appointment Confirmation").should("exist");
    cy.get("#facility").should("include.text", `${facility}`);
    checkReadmission();
    cy.get("#hospital_readmission").should(
      "include.text",
      `${readmissionCbox}`
    );
    cy.get("#program").should("include.text", `${program}`);
    cy.get("#visit_date").should("include.text", `${visitDate}`);
    cy.get("#comment").should("include.text", `${comment}`);
  });
});
