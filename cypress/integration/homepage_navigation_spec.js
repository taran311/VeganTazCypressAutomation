var baseUrl = 'http://vegantaz.com';
var fatlossPage = `${baseUrl}/fatloss.html`
var exercisePage = `${baseUrl}/exercise.html`
var dietPage = `${baseUrl}/diet.html`
var trainingPage = `${baseUrl}/training.html`

var fatlossButton = '#nav-fatloss';
var exerciseButton = '#nav-exercise';
var dietButton = '#nav-diet';
var trainingButton = '#nav-training';

describe('Homepage Navigation Steps', () => {
    it('Homepage correctly navigates to Fatloss', () => {
        cy.visit(baseUrl) 
        cy.get(fatlossButton).click();
        cy.url().should('eq', fatlossPage)
    })
    it('Homepage correctly navigates to Exercise', () => {
        cy.visit(baseUrl) 
        cy.get(exerciseButton).click();
        cy.url().should('eq', exercisePage)
    })
    it('Homepage correctly navigates to Diet', () => {
        cy.visit(baseUrl) 
        cy.get(dietButton).click();
        cy.url().should('eq', dietPage)
    })
    it('Homepage correctly navigates to Training', () => {
        cy.visit(baseUrl) 
        cy.get(trainingButton).click();
        cy.url().should('eq', trainingPage)
    })    
})