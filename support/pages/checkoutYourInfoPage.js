

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
    this.inputFirstName.setValue(firstname);
    this.inputLastName.setValue(lastname);
    this.inputZip.setValue(zip);
} 
clickContinueButton() {
        this.continueButton.click()

    }
}

module.exports = new CheckoutYourInfoPage();
