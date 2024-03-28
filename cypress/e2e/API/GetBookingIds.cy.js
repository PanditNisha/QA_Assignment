describe("Returning the ids of all the bookings that exist within the API", () => {
    let authToken = "";
    beforeEach(() => {
        cy.loginApi().then(() => {
            authToken = Cypress.env('authToken')
        })
    })

    it('Gets a list of all booking  IDs', () => {
        cy.api({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
            failOnStatusCode: false,
            headers: { Authorization: `Bearer ${authToken}` }

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.empty;
            expect(response.body).to.be.an('array');
            response.body.forEach((booking) => {
                expect(booking.bookingid).to.be.a('number');
          })
        })
    })

    it('Gets a specific booking using ID', () => {
        cy.api('GET', 'https://restful-booker.herokuapp.com/booking/1', { Authorization: `Bearer ${authToken}` }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('firstname')
        })
    })

});