
const Page = require('./basePage');
const assert = require('assert');

class HomePage extends Page {

    get shoppingCart() {
        return $('//a[@class= "shopping_cart_link"]');
    } 

    checkIfUserIsLogedIn() {
     assert.equal(this.shoppingCart.isDisplayed(), true,"Shopping cart is dipslayable");
        
    }
    
    }
    

module.exports = new HomePage();
