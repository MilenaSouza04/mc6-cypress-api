// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('cadastrarReserva', (payload) => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: payload, failOnStatusCode: false
    })
})

Cypress.Commands.add('alterarReserva', (payload) => {
    cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${id_reserva}`,
        body: dados_update,
        headers: {
            Cookie: `token=${token}`,

        }
    })
})

Cypress.Commands.add('deleteReserva', (payload) => {
    cy.request({
        method: 'DELETE',
        url: `https://restful-booker.herokuapp.com/booking/${id_reserva}`,
        headers: {
            Cookie: `token=${token}`,

        }
    })
})