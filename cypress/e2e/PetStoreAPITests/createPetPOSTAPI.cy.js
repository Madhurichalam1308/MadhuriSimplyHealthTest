describe('Create  a new pet , Get the pet details by id and finally delete the created pet ',() =>
{
    it('Add details of the new Pet',()=> {
        cy.fixture('createPet').then((payload) => {
            cy.request({

                method: 'POST',
                url: Cypress.env('createPetUrl'),
                body:
                    {
                        "id": payload.id,
                        "category": {
                            "id": payload.id,
                            "name": payload.name
                        },
                        "name": payload.name,
                        "photoUrls": [
                            "string"
                        ],
                        "tags": [
                            {
                                "id": payload.id,
                                "name": payload.name
                            }
                        ],
                        "status": payload.status
                    }

            }).then((res) => {
                expect(res.status).to.eq(200)
            })


        })
    })
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