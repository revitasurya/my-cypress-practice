
describe('Localhost Website Test', () => {
    it('should visit the localhost website', () => {
      cy.visit('http://localhost:8888/mylocalsite/');
      cy.contains('jungwonyang caffee'); // Example assertion
    });
  });
  