/// <reference types="cypress"/>
import { faker, generateMersenne32Randomizer } from '@faker-js/faker';

const dados_cadastro = require('../fixtures/cadastro_reserva.json')
const dados_update = require('../fixtures/update_reserva.json')
const gerador = require('../fixtures/reserva_utils.js')

describe('Cadastrar reserva', () => {

    let token

    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                username: 'admin',
                password: 'password123'
            }
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            token = resposta.body.token
            console.log('Token gerado: ' + token)

        })
    })

    it.only('Cadastrar reserva com sucesso - Dados aleatorios', () => {

        // const paylod_aleatorio = {

        //     "firstname": faker.person.firstName(),
        //     "lastname": faker.person.lastName(),
        //     "totalprice": faker.finance.amount({ dec: 0 }),
        //     "depositpaid": true,
        //     "bookingdates": {
        //         "checkin": "2025-01-01",
        //         "checkout": "2026-01-01"
        //     },
        //     "additionalneeds": "Breakfast"
        // }

        const payload_aleatorio = gerador.gerarReserva();


        cy.cadastrarReserva(payload_aleatorio).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body.bookingid).not.be.NaN
            expect(resposta.body.booking.firstname).to.equal(dados_cadastro.firstname)
            expect(resposta.body.booking.lastname).to.equal(dados_cadastro.lastname)
            expect(resposta.body.booking.totalprice.toString()).to.equal(dados_cadastro.totalprice)
        })
    })

    it('Cadastrar reserva sem enviar dados', () => {

        cy.cadastrarReserva({}).then((resposta) => {
            expect(resposta.status).to.equal(500)

        })
    })
})

it('Cadastrar reserva com sucesso', () => {
    

     cy.cadastrarReserva(dados_cadastro).then((resposta) => {
        expect(resposta.status).to.equal(200)
        expect(resposta.body.bookingid).not.be.NaN
        expect(resposta.body.booking.firstname).to.equal(dados_cadastro.firstname)
        expect(resposta.body.booking.lastname).to.equal(dados_cadastro.lastname)
    })
})

it('Alterar reserva', () => {

    cy.cadastrarReserva(dados_cadastro).then((resposta) => {
        expect(resposta.status).to.equal(200)

    })

    const id_reserva = resposta.body.bookingid

    cy.alterarReserva(id_reserva, dados_update, token).then((resposta) => {
        expect(resposta.status).to.equal(200)
        expect(resposta.body.firstname).to.equal(dados_update.firstname)

    })


    it('Deletar reserva', () => {

        cy.cadastrarReserva(dados_cadastro).then((resposta) => {
            expect(resposta.status).to.equal(200)

        })

        const id_reserva = resposta.body.bookingid

        cy.deleteReserva(id_reserva, token).then((resposta) => {
            expect(resposta.status).to.equal(201)
        })
    })

})









