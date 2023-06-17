describe('Create and add a new pet to the store',() =>
{
    it('Add a new Pet',()=>
    {
        cy.request({

            method : 'POST',
            url : 'https://petstore.swagger.io/v2/pet',
            body :
        {
            "id": 0,
            "category": {
            "id": 0,
                "name": "doggie1"
        },
            "name": "doggie1",
            "photoUrls": [
            "string"
        ],
            "tags": [
            {
                "id": 0,
                "name": "doggie1"
            }
        ],
            "status": "available"
        }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data).has.property('name','doggie1')
        })
    })
})