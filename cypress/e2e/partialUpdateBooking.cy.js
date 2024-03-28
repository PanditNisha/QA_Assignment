describe("Partially Updating the booking", () => {
    let bookingId = "";
    beforeEach(() => {
        cy.BookingId().then(() => {
            bookingId = Cypress.env('bookingId')
        })
    })

    it("Partially updating a currently created booking", () => {
        cy.fixture('credentials.json').then((credentials) => {
           cy.api({
                method: 'PATCH',
                url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                failOnStatusCode: false,
                auth: {
                    "username": credentials.username,
                    "password": credentials.password
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Cookie': 'token=abc123'
                },
                body: {
                    "firstname": "Herfmes",
                    "lastname": "Brorgrvrwn",
                }

            }).then((updateResponse) => {
                expect(updateResponse.status).to.eq(200);
            });
        });
    });
});
