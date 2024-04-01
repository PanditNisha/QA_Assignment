const logo = "div .sq-site-title a";
const productTitle = "div .ec_product_title_type1:first()";
const productPrice = "div .ec_price_type1";
const addToCartButton = "div #ec_add_to_cart_5";
const viewCartButton = "#ec_added_to_cart_5";
const quantityIncrementButton = ".ec_cart_button_row_shopping .ec_cart_button";
const CheckOutButton = "div .ec_cart_button_row_checkout .ec_cart_button";
const countryInputField = "div #ec_cart_billing_country";
const firstNameInputField = "div #ec_cart_billing_first_name";
const lastNameInputField = "div #ec_cart_billing_last_name";
const companynameInputField = "div #ec_cart_billing_company_name";
const addressInputField = "div #ec_cart_billing_address";
const cityInputField = "div #ec_cart_billing_city";
const stateInputField = "div #ec_cart_billing_state_IN";
const pincodeInputField = "div #ec_cart_billing_zip";
const phoneNumberInputField = "div #ec_cart_billing_phone";
const emailInputField = "div #ec_contact_email";
const reemailInputField = "div #ec_contact_email_retype";
const continueToShippingButton = "div .ec_cart_button:eq(1)";
const continueToPaymentButton = "div .ec_cart_button:last";
const submitOrderButton ="div #ec_cart_submit_order";
const confirmationMessageOverlay =".example-tile-heading"; 
const sortField ="div #sortfield";
const reportBugsTab ="div #menu-item-5687";
const headingReportBugs ="div .entry-content h3";
const issueTitle ="div #issue-title-form-group-1 .selectpicker";
const issueType ="div #issue-type-form-group-1 div .selectpicker";
const frequencyRadiobutton ="div #frequency-form-group-1 .btn-group .radio-group-wrapper input:eq(1)";
const priorityRadioButton ="div #priority-form-group-1 .btn-group .radio-group-wrapper  input:eq(1)";
const dragElement =".ui-state-default:eq(0)";
const cartQuantity = "div .ec_plus";
const updateButton = "div .ec_cartitem_update_button"
const errorMessage = "div .academy-popup-bug-title";
const currencyDropdown = "div #ec_currency_conversion"
const filterPrice = "div .menu_link:eq(3)"
const signInButton = "div .ec_login_widget_button"
const naturalWidth = ".ec_image_link_cover:eq(1)"
const currentWidth = ".skip-lazy:eq(1)"
const cardImage = ".ec_image_link_cover:eq(3)"
const allCards = "div .ec_product_li"
const cards = ".ec_product_page_showing"
const pagination = ".what-we-offer-pagination-link"

class homepage {
    static getVisit() {
        return cy.visit("https://academybugs.com/find-bugs/#");
    }
    static getLogo(){
        return cy.get(logo)
    }
    static getProductTitle() {
        return cy.get(productTitle);
    }
    static getProductPrice() {
        return cy.get(productPrice);
    }
    static getAddToCartButton() {
        return cy.get(addToCartButton);
    }
    static getViewCartButton() {
        return cy.get(viewCartButton);
    }
    static getQuantityIncrementButton() {
        return cy.get(quantityIncrementButton);
    }
    static getCheckOutButton() {
        return cy.get(CheckOutButton);
    }
    static getCountryInputField() {
        return cy.get(countryInputField);
    }
    static getFirstNameInputField() {
        return cy.get(firstNameInputField);
    }
    static getLastNameInputField() {
        return cy.get(lastNameInputField);
    }
    static getCompanynameInputField() {
        return cy.get(companynameInputField);
    } 
    static getAddressInputField() {
        return cy.get(addressInputField);
    }
    static getCityInputField() {
        return cy.get(cityInputField);
    }
    static getStateInputField() {
        return cy.get(stateInputField);
    }
    static getPincodeInputField() {
        return cy.get(pincodeInputField);
    }
    static getPhoneNumberInputField() {
        return cy.get(phoneNumberInputField);
    }
    static getEmailInputField() {
        return cy.get(emailInputField);
    }
    static getReemailInputField() {
        return cy.get(reemailInputField);
    }
    static getContinueToShippingButton() {
        return cy.get(continueToShippingButton);
    }
    static getContinueToPaymentButton() {
        return cy.get(continueToPaymentButton);
    }
    static getSubmitOrderButton() {
        return cy.get(submitOrderButton);

    } static getConfirmationMessageOverlay() {
        return cy.get(`${confirmationMessageOverlay}:contains("Thank you for your order")`);
    }
    static getSortField() {
        return cy.get(sortField);
    }
    static getReportBugsTab() {
        return cy.get(reportBugsTab);
    }
    static getHeadingReportBugs() {
        return cy.get(headingReportBugs);
    }
    static getIssueTitle() {
        return cy.get(issueTitle);
    }
    static getIssueType() {
        return cy.get(issueType);
    }
    static getFrequencyRadiobutton() {
        return cy.get(frequencyRadiobutton);
    }
    static getPriorityRadioButton() {
        return cy.get(priorityRadioButton);
    }
    static getDragElement() {
        return cy.get(dragElement);
    }

    static getCartQuantity(){
        return cy.get(cartQuantity);
    }

    static getUpdateButton(){
        return cy.get(updateButton);
    }
    
    static getErrorMessage() {
        cy.wait(7000);
        return cy.get(errorMessage);
    }

    static getCurrencyDropdown() {
        return cy.get(currencyDropdown);
    }

    static getFilterPrice() {
        return cy.get(filterPrice);
    }

    static getSignInButton() {
        return cy.get(signInButton);
    }

    static getNaturalWidth() {
        return cy.get(naturalWidth);
    }

    static getCurrentWidth() {
        return cy.get(currentWidth);
    }

    static getCardImage() {
        return cy.get(cardImage);
    }

    static getAllCards() {
        return cy.get(allCards);
    }

    static getCards() {
        return cy.get(cards);
    }

    static getPagination() {
        return cy.get(pagination);
    }

}
export default homepage;