import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the applicaiton', () => {
  cy.visit('http://192.168.0.107:3000');
});

Then('I can see the logo', () => {
  cy.get('.App-logo').should('be.visible');
});
