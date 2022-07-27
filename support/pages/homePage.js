

const Page = require('./basePage');


class HomePage extends Page {
   
  get shoppingCart(){
    return $('//a[@class="shopping_cart_link"]'); 
  }
  
  
 
  clickShoppingCartButton(){
  this.shoppingCart.click()
 }

}  

module.exports = new HomePage();
