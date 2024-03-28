describe("Creating new booking", () => {
    let authToken = "";
    beforeEach(() => {
        cy.loginApi().then(() => {
            authToken = Cypress.env('authToken')
        })
    })
    it('Creates a new booking', () => {
        cy.api({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: { Authorization: `Bearer ${authToken}` },
            body: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('bookingid');
            expect(response.body).to.have.property('booking');
            expect(response.body.booking).to.have.property('firstname');
            expect(response.body.booking).to.have.property('lastname');
            expect(response.body.booking).to.have.property('totalprice');
            expect(response.body.booking).to.have.property('depositpaid');
            expect(response.body.booking).to.have.property('bookingdates');
            expect(response.body.booking.bookingdates).to.have.property('checkin');
            expect(response.body.booking.bookingdates).to.have.property('checkout');
            expect(response.body.booking).to.have.property('additionalneeds');
        })
    })
})