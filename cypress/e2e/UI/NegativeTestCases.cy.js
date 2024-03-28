describe('Validating that items on website are redirecting to error module', () => {
    beforeEach(() => {
      cy.visit('https://academybugs.com/find-bugs/#')
    })
  
    it('User should not able to update the number of cart icons', () => {
        cy.get('div #ec_add_to_cart_5').click();
        cy.get('div .ec_product_added_to_cart  a').click();
        cy.get('div .ec_plus').dblclick();
        cy.get('div .ec_cartitem_update_button').click();
        cy.get('#popmake-4406').should("be.visible")

    })

    it('User should not able to select the europe currency', () => {
        cy.get('div #ec_add_to_cart_5').click()
        cy.get('div .ec_product_added_to_cart  a').click()
        cy.get('div #ec_currency_conversion').select("EUR");
        

    })

    it('User should not able to filter the price under the range $50.00 - $99.99 (3) ', () => {
        cy.get('div #ec_add_to_cart_5').click();
        cy.get('div .ec_product_added_to_cart  a').click();
        cy.get('div .menu_link:eq(3)').click();
    })

    it('Sign-in button overlaps the footer', () => {
        cy.get('div #ec_add_to_cart_5').click();
        cy.get('div .ec_product_added_to_cart  a').click();
        cy.get('div .ec_login_widget_button').click({force: true});
    })

    it("Image size is not appropriate (-ve)",()=>{
        cy.get('.ec_image_link_cover:eq(3)').then(() => {
            const naturalWidth = cy.get(".ec_image_link_cover:eq(1)").naturalWidth;
      
            const currentWidth = cy.get(".skip-lazy:eq(1)").width;
      
            if(currentWidth === naturalWidth){
                cy.log("Image is aligned")
            }
            else{
                cy.get(".ec_image_link_cover:eq(3)").click(); 
            }
        
          })
        })

    it("The user should not be able to view the appropriate number of cards based on the specified products per page",()=>{
        cy.get('div .ec_product_li').as('Count');
        cy.get('@Count').then((error)=>{
            cy.log(error.length);
            cy.get(".ec_product_page_showing").should("contain",error.length);
        })
        cy.get(".what-we-offer-pagination-link").first().click();
        cy.get(".ec_product_page_showing").should("not.contain",10);
        })
    })
    
