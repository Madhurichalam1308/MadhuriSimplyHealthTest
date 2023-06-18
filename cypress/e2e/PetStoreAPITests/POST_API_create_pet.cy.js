describe('Create and add a new pet to the store',() =>
{
    it('Add and get details of the new Pet',()=> {
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
                expect(res.body.id).to.eq(payload.id)
                expect(res.body.name).to.eq(payload.name)
                expect(res.body.status).to.eq(payload.status)
            })
        })
    })

})