

const Page = require('./basePage');


class CheckoutYourInfoPage extends Page {
   
  get inputUsername(){
    return $('//input[@id="first-name"]');
  }
  get inputPassword(){
    return $('//input[@id="last-name"]'); 
  }
  
  get inputZip(){
    return $('//input[@id="postal-code"]')
  }
  get continueButton(){
    return $('//input[@id="continue"]')
  }


   inputUsernameLastnameAndZip(username, password, zip){
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.inputZip.setValue(zip);
} 
clickContinueButton() {
        this.continueButton.click()

    }
}

module.exports = new CheckoutYourInfoPage();
