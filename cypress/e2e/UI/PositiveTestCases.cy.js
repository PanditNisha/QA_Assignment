import homepage from "../../locators/HomePage";

describe("Checking the visibility and functionality of items on homepage", () => {

  beforeEach(() => {
    homepage.getVisit();
  })
  // it("Validating the functionality of the logo on header", () => {
  //   homepage.getLogo().click();
  //   cy.url().should("contain", "https://academybugs.com/");
  // })
  // it("Validating the visibility of the elements on product card", () => {
  //   homepage.getProductTitle().should('be.visible');
  //  homepage.getAddToCartButton().should('be.visible');
  //   homepage.getProductPrice().should('be.visible');
  // })

  // it("User is able to purchase the item", () => {
  //   homepage.getAddToCartButton().click();
  //   homepage.getViewCartButton().click();
  //   homepage.getCheckOutButton().click();
  //   homepage.getCountryInputField().select("India");
  //   homepage.getFirstNameInputField().type("Khushi");
  //   homepage.getLastNameInputField().type("Pandit");
  //   homepage.getCompanynameInputField().type("XyZ company");
  //   homepage.getAddressInputField().type("Jagti");
  //   homepage.getCityInputField().type("Jammu");
  //   homepage.getStateInputField().select("Delhi");
  //   homepage.getPincodeInputField().type("1435436");
  //   homepage.getPhoneNumberInputField().type("9875984840");
  //   homepage.getEmailInputField().type("ffef@gmail.com");
  //   homepage.getReemailInputField().type("ffef@gmail.com");
  //   homepage.getContinueToShippingButton().click();
  //   homepage.getContinueToPaymentButton().click();
  //  homepage.getSubmitOrderButton().click();
  //   homepage.getConfirmationMessageOverlay().should('be.visible');
  // })
// it("Checking the functionality of the sort field",()=>{
// homepage.getSortField().select("Price High-Low");
// let productPrice =[];
// homepage.getProductPrice().as("Price");
// cy.get('@Price').then((price)=>{
//   let productRate = price.text();
//   productPrice = productRate.split("$"); 
  
//   for(let i=0;i<productPrice.length;i++){
//     if(productPrice[1] >= productPrice[i]){
//       break;
//     }
//     else{
//       cy.log("Products are not sorted properly")
//     }
//   }
// }) 
// })
it("Functionality test of Report Bugs", () => {
  homepage.getReportBugsTab().click();
  homepage.getHeadingReportBugs().contains("Report Bugs")
  homepage.getIssueTitle().select("The product image is broken when zoomed in")
  homepage.getIssueType().select("Performance")
  homepage.getFrequencyRadiobutton().click()
  homepage.getPriorityRadioButton().click()
  homepage.getDragElement().drag('#bug-1-sortable-1');
  
})
})
