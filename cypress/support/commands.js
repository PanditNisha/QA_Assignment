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
let authToken ="";
Cypress.Commands.add('loginApi', () => {
    cy.fixture('credentials.json').then((credentials) => {
        cy.api({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            header: {
                'Content-Type': 'application/json'
            },
            body: {
                "username": credentials.username,
                "password": credentials.password
            }
        }).then((response) => {
        //    authToken = response.body.token;
            Cypress.env('authToken', response.body['token'])
        })
    })
})
beforeEach(() => {
    cy.loginApi().then(() => {
        authToken = Cypress.env('authToken')
    })
})
Cypress.Commands.add('BookingId', () => { 
 cy.api({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: { Authorization: `Bearer ${authToken}` },
        body: {
            "firstname": "Jism",
            "lastname": "Brfown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }

    }).then((response) => {
        Cypress.env('bookingId', response.body['bookingid'])
    })
    
    });