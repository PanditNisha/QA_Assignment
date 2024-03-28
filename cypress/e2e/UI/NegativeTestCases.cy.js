describe('Testing', () => {
    beforeEach(() => {
      cy.visit('https://academybugs.com/find-bugs/#')
    })
  
    it('User should not able to update the number of cart icons', () => {
        cy.get('#ec_add_to_cart_5').click()
        cy.get('.ec_product_added_to_cart  a').click()
        cy.get('.ec_plus').dblclick();
        cy.get('.ec_cartitem_update_button').click()

    })

    it('User should not able to select the europe currency', () => {
        cy.get('#ec_add_to_cart_5').click()
        cy.get('.ec_product_added_to_cart  a').click()
        cy.get('#ec_currency_conversion').select("EUR");

    })

    it('User should not able to filter the price under the range $50.00 - $99.99 (3) ', () => {
        cy.get('#ec_add_to_cart_5').click()
        cy.get('.ec_product_added_to_cart  a').click()
        cy.get('.menu_link:eq(3)').click()
    })

    it('Sign-in button overlaps the footer', () => {
        cy.get('#ec_add_to_cart_5').click()
        cy.get('.ec_product_added_to_cart  a').click()
        cy.get('.ec_login_widget_button').click({force: true})
    })


})