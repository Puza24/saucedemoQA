

const Page = require('./basePage');


class CheckoutYourInfoPage extends Page {

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
