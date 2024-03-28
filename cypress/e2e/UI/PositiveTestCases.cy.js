// describe("Checking the visibility and functionality of items on homepage", () => {

//     beforeEach(() => {
//         cy.visit("https://academybugs.com/find-bugs/#") 
//     })
//     it("Validating the visibility of the header elements", () => {
//       //header part
//       cy.get("div .sq-site-title a").should('be.visible');
//       cy.get("div #menu-item-5906 a").should('be.visible');
//       cy.get("div #menu-item-1024  a").should('be.visible');
//       cy.get("div #menu-item-561  a").should('be.visible');
//       cy.get("div #menu-item-5687  a").should('be.visible');
//       //heading titles
//       cy.get("div [style='text-align: center; margin-top: .8em']").should('be.visible');
//       cy.get("div .entry-content  h6").should('be.visible');
//       //Cart details
//       cy.get("div .ec_product_title_type1:first()").should('be.visible');
//       cy.get("div .ec_price_type1:first()").should('be.visible');
//       //Add to cart button
//       cy.get("div #ec_add_to_cart_5").click();
//       //Checkout now button
//       cy.get("div #ec_added_to_cart_5").click();
//       //Shopping cart section
//       cy.get("div .ec_plus").click();

//     })
//     describe('find-bugs UI testing positive scenario ', () => {
//     beforeEach(() => {
//       cy.visit('https://academybugs.com/find-bugs/#')
//     })
  
    // it('User is able to see the header', () => {
    //   cy.get("div .sq-site-title a").should("be.visible")
    //   cy.get("#sq-site-navigation:contains('Examples of Bugs')").should("be.visible")
    //   cy.get("#sq-site-navigation:contains('Types of Bugs')").should("be.visible")
    //   cy.get("#sq-site-navigation:contains('Find Bugs')").should("be.visible")
    //   cy.get("#sq-site-navigation:contains('Report Bugs')").should("be.visible")
    //   cy.get("a .fas:first").should("be.visible");
    // })

    // it("User is able to purchase the item",()=>{
    //     cy.get("div #ec_add_to_cart_5").first().click();
    //     cy.get("div #ec_added_to_cart_5").first().click();
    //     cy.get("div .ec_cart_button_row_checkout .ec_cart_button").click();
    //     cy.get("div #ec_cart_billing_country").select("India");
    //     cy.get("div #ec_cart_billing_first_name").type("Khushi");
    //     cy.get("div #ec_cart_billing_last_name").type("Pandit");
    //     cy.get("div #ec_cart_billing_company_name").type("XyZ company");
    //     cy.get("div #ec_cart_billing_address").type("Jagti");
    //     cy.get("div #ec_cart_billing_city").type("Jammu");
    //     cy.get("div #ec_cart_billing_state_IN").select("Delhi");
    //     cy.get("div #ec_cart_billing_zip").type("1435436");
    //     cy.get("div #ec_cart_billing_phone").type("9875984840");
    //     cy.get("div #ec_contact_email").type("ffef@gmail.com");
    //     cy.get("div #ec_contact_email_retype").type("ffef@gmail.com");
    //     cy.get(".ec_cart_button_row.ec_show_two_column_only .ec_cart_button").click();
    //     cy.get("div .ec_cart_button:last").click(); 
    //     cy.get("#ec_cart_submit_order").click();  
    //     cy.get('.example-tile-heading:contains("Not a real order")').should('be.visible');
    // })
//     it("The user should not be able to view the appropriate number of cards based on the specified products per page (-ve)",()=>{
// cy.get('div .ec_product_li').as('Count');
// cy.get('@Count').then((error)=>{
//     cy.log(error.length);
//     cy.get(".ec_product_page_showing").should("contain",error.length);
// })
// cy.get(".what-we-offer-pagination-link").first().click();
// cy.get(".ec_product_page_showing").should("not.contain",10);
// })

  // })

