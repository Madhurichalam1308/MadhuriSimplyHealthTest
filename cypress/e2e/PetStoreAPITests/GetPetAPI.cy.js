describe('Get a pet details by id',() => {
    it('get sdetails by pet id', () => {
        cy.fixture('createPet').then((payload) => {
            cy.request({
                method: 'GET',
                url: Cypress.env('getPetUrl')
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(1090)
                expect(res.body.name).to.eq(payload.name)
                expect(res.body.status).to.eq(payload.status)
            })
        })
    })
})