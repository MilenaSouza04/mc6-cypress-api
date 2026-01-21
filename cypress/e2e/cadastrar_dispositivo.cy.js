/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {

    it('Cadastrar dispositivos existente', () => {

        const payload = {
            name: 'Celular Milena',
            data: {
                year: 2030,
                price: 200,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1TB",
            },
        }

        cy.request({
            method: 'POST',
            url: '/objects',
            body: payload

        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).not.to.empty
            expect(resposta.body.createdAt).not.to.empty
            expect(resposta.body.name).to.equal(payload.name)
            expect(resposta.body.data.year).to.equal(payload.data.year)
        })
    })
})





