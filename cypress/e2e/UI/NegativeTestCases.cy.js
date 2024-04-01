import homepage from "../../locators/HomePage";

describe('Validating that items on website are redirecting to error module', () => {
    beforeEach(() => {
        homepage.getVisit();
    })

    it('User should not able to update the number of cart icons', () => {
        homepage.getAddToCartButton().click();
        homepage.getViewCartButton().click();
        homepage.getCartQuantity().dblclick();
        homepage.getUpdateButton().click();

    })

    it('User should not able to select the europe currency', () => {
        homepage.getAddToCartButton().click()
        homepage.getViewCartButton().click()
        homepage.getCurrencyDropdown().select("EUR");
       
    })

    it('User should not able to filter the price under the range $50.00 - $99.99 (3) ', () => {
        homepage.getAddToCartButton().click();
        homepage.getViewCartButton().click();
        homepage.getFilterPrice().click();
    })

    it('Sign-in button overlaps the footer', () => {
        homepage.getAddToCartButton().click();
        homepage.getViewCartButton().click();
        homepage.getSignInButton().click({ force: true });
    })

    it("Image size is not appropriate (-ve)", () => {
        homepage.getCardImage().then(() => {
            const naturalWidth = homepage.getNaturalWidth().naturalWidth;

            const currentWidth = homepage.getCurrentWidth().width;

            if (currentWidth !== naturalWidth) {
                homepage.getCardImage().click();
                homepage.getErrorMessage().should("be.visible")
            }
            else {
                cy.log("Image is properly alligned")
            }

        })
    })

    it("The user should not be able to view the appropriate number of cards based on the specified products per page", () => {
        homepage.getAllCards().as('Count');
        cy.get('@Count').then((error) => {
            cy.log(error.length);
            homepage.getCards().should("contain", error.length);
        })
        homepage.getPagination().first().click();
        homepage.getCards().should("not.contain", 10);
    })
})

