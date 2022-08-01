
const Page = require('./basePage');
const assert = require('assert');

class CheckoutYourInfoPage extends Page {

  get infoPageIsDisplayed(){
    return $('//div[@class="checkout_info"]');
  }
  get inputFirstName(){
    return $('//input[@id="first-name"]');
  }
  get inputLastName(){
    return $('//input[@id="last-name"]'); 
  }
  get inputFirstname() {
    return $('//input[@id="first-name"]');
  }
  get inputLastname() {
    return $('//input[@id="last-name"]');

  }

  get inputZip() {
    return $('//input[@id="postal-code"]')
  }
  get continueButton() {
    return $('//input[@id="continue"]')
  }
  checkIfCheckoutYourInfoPageIsDisplayed(){
    assert.equal(this.infoPageIsDisplayed.isDisplayed(), true, "Info page is displayed");
    
   }


  inputFirstNameLastNameAndZip(firstname, lastname, zip){
    this.setValue(this.inputFirstName, firstname);
    this.setValue(this.inputLastName, lastname);
    this.setValue(this.inputZip, zip);
} 
clickContinueButton() {
        this.click(this.continueButton);
}
  inputUsernameLastNameAndZip(firstName, lastName, zip) {
    this.inputFirstname.setValue(firstName);
    this.inputLastname.setValue(lastName);
    this.inputZip.setValue(zip);
  }
  clickContinueButton() {
    this.continueButton.click()


  }
}

module.exports = new CheckoutYourInfoPage();
