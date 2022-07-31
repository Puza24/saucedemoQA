

const Page = require('./basePage');


class CheckoutYourInfoPage extends Page {
   
  get inputFirstName(){
    return $('//input[@id="first-name"]');
  }
  get inputLastName(){
    return $('//input[@id="last-name"]'); 
  }
  
  get inputZip(){
    return $('//input[@id="postal-code"]')
  }
  get continueButton(){
    return $('//input[@id="continue"]')
  }

  inputFirstNameLastNameAndZip(firstname, lastname, zip){
    this.setValue(this.inputFirstName, firstname);
    this.setValue(this.inputLastName, lastname);
    this.setValue(this.inputZip, zip);
} 
clickContinueButton() {
        this.continueButton.click()

    }
}

module.exports = new CheckoutYourInfoPage();
