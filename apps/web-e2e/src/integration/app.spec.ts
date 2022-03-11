import { getGreeting } from '../support/app.po';

describe('web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('This is a gatsby application created by Nx.');
  });
});
