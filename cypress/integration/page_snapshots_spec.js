var baseUrl = 'http://vegantaz.com';

describe('Homepage Navigation Steps', () => {
    it('Homepage correctly navigates to Fatloss', () => {
        cy.visit(baseUrl)
        .then(() => {
            //uncomment below line to fail testit
            //cy.visit(`${baseUrl}/training.html`)
            cy.get('body')
            .toMatchImageSnapshot();
        })
    })
})