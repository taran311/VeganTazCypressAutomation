var baseUrl = 'http://vegantaz.com';

describe('Intercept example', () => {
    it('Homepage intercepted with separate html file', () => {        
        cy.intercept('GET', 'vegantaz.com', {fixture: 'example.html'})
        cy.visit(baseUrl)
    })
})