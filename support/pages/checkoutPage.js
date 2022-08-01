
const Page = require('./basePage');
const assert = require('assert');

class CheckoutPage extends Page {
   
  get checkoutButton(){
    return $('//button[@id="checkout"]'); 
  }
  get checkoutPageIsDisplayed(){
    return $('//div[@class="cart_desc_label"]'); 
  }
  
  clickCheckoutButton(){
  this.click(this.checkoutButton);
 }
 checkIfCheckoutPageIsDisplayed(){
  assert.equal(this.getText(this.checkoutPageIsDisplayed), 'DESCRIPTION', "Twitter page is displayed");
 }
}  

module.exports = new CheckoutPage();
