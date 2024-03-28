describe("Checking the visibility and functionality of items on homepage", () => {

    beforeEach(() => {
        cy.visit("https://academybugs.com/find-bugs/#") 
    })
    it("Validating the visibility of the elements on product card", () => {
      cy.get("div .ec_product_title_type1:first()").should('be.visible');
      cy.get("div .ec_price_type1:first()").should('be.visible');
      //Add to cart button
      cy.get("div #ec_add_to_cart_5").click();
      //Checkout now button
      cy.get("div #ec_added_to_cart_5").click();
      //Shopping cart section
      cy.get("div .ec_plus").click();

    })

  
    it('User is able to see the header', () => {
      cy.get("div .sq-site-title a").should("be.visible")
      cy.get("#sq-site-navigation:contains('Examples of Bugs')").should("be.visible")
      cy.get("#sq-site-navigation:contains('Types of Bugs')").should("be.visible")
      cy.get("#sq-site-navigation:contains('Find Bugs')").should("be.visible")
      cy.get("#sq-site-navigation:contains('Report Bugs')").should("be.visible")
      cy.get("a .fas:first").should("be.visible");
    })

    it("User is able to purchase the item",()=>{
        cy.get("div #ec_add_to_cart_5").first().click();
        cy.get("div #ec_added_to_cart_5").first().click();
        cy.get("div .ec_cart_button_row_checkout .ec_cart_button").click();
        cy.get("div #ec_cart_billing_country").select("India");
        cy.get("div #ec_cart_billing_first_name").type("Khushi");
        cy.get("div #ec_cart_billing_last_name").type("Pandit");
        cy.get("div #ec_cart_billing_company_name").type("XyZ company");
        cy.get("div #ec_cart_billing_address").type("Jagti");
        cy.get("div #ec_cart_billing_city").type("Jammu");
        cy.get("div #ec_cart_billing_state_IN").select("Delhi");
        cy.get("div #ec_cart_billing_zip").type("1435436");
        cy.get("div #ec_cart_billing_phone").type("9875984840");
        cy.get("div #ec_contact_email").type("ffef@gmail.com");
        cy.get("div #ec_contact_email_retype").type("ffef@gmail.com");
        cy.get(".ec_cart_button_row.ec_show_two_column_only .ec_cart_button").click();
        cy.get("div .ec_cart_button:last").click(); 
        cy.get("#ec_cart_submit_order").click();  
        cy.get('.example-tile-heading:contains("Not a real order")').should('be.visible');
    })
    it("Continue shopping functionality",()=>{
      cy.get('#ec_add_to_cart_5').click()
      cy.get('.ec_product_added_to_cart  a').click()
      cy.get('.ec_cart_button_row_shopping .ec_cart_button').click()
      cy.get('.ec_image_link_cover:eq(3)').click()
      cy.get('.ec_add_to_cart_form .ec_details_title').contains("DNK Yellow Shoes")
      
        })

      })