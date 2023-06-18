describe('Delete a pet by ID',() => {
    it('Delete a pet by ID', () => {
            cy.request({
                method: 'DELETE',
                url: Cypress.env('deletePetUrl'),
                headers :{
                    'api_key':'special-key'
                }

            }).then((res) => {
                expect(res.status).to.eq(200)

            })
    })
})