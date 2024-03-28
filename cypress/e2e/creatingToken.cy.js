describe("Creating token for upcoming apis", () => {
    let authToken = "";
    it("generating Tokens", () => {
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
                expect(response.status).to.eq(200); 
                authToken = response.body.token;
            });
        })
    });
});