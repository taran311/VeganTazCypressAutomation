var baseUrl = 'http://vegantaz.com';
var dietPage = `${baseUrl}/diet.html`

describe('Page Snapshots example', () => {
    it('Snapshot Example Test for diet page', () => {
        cy.visit(dietPage)
        .then(() => {
            //uncomment below line to fail testit
            //cy.visit(`${baseUrl}/training.html`)
            cy.get('body')
            .toMatchImageSnapshot();
        })
    })
})