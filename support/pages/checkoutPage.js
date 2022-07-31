

const Page = require('./basePage');


class CheckoutPage extends Page {
   
  get checkoutButton(){
    return $('//button[@id="checkout"]'); 
  }
  
  
  clickCheckoutButton(){
  this.click(this.checkoutButton);
 }

}  

module.exports = new CheckoutPage();
