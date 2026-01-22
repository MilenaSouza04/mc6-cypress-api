/// <reference types="cypress"/>

describe('Buscar dispositivos', () => {

    it('Buscar dispositivos existente', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/3'

        }).then((resposta) => {

            console.log('MInha resposta que esperei', resposta)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal('3')
            expect(resposta.body.name).to.equal('Apple iPhone 12 Pro Max')
        })

    })

    const resposta = {
        body: {

        },
        statusText: 'OK ',
        status: 200
    }

})
