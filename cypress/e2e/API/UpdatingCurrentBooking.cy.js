 describe("Updating the booking",()=>{
    let bookingId = "";
    beforeEach(() => {
        cy.BookingId().then(() => {
            bookingId = Cypress.env('bookingId')
        })
    })
    it("Updating a currently created booking", () => {
        cy.fixture('credentials.json').then((credentials) => {
        cy.fixture('updatedBookingData.json').then((data) => {
        cy.api({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            failOnStatusCode: false,
            auth: {
                "username": credentials.username,
                "password": credentials.password
            },
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': 'token=abc123'
            }
        }).then((updateResponse) => {
            expect(updateResponse.status).to.eq(200);
        });
    });
});
    });
});