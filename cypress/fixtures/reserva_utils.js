import { faker } from '@faker-js/faker';

export function gerarReserva() {
    return {
        "firstname": faker.person.firstName(),
        "lastname": faker.person.lastName(),
        "totalprice": faker.finance.amount({ dec: 0 }),
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-01-01",
            "checkout": "2026-01-01"
        },
        "additionalneeds": "Breakfast"
    };
}
