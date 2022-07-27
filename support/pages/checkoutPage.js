

const Page = require('./basePage');


class CheckoutPage extends Page {
   
  get checkoutButton(){
    return $('//button[@id="checkout"]'); 
  }
  
  
  clickCheckoutButton(){
  this.checkoutButton.click()
 }

}  

module.exports = new CheckoutPage();
