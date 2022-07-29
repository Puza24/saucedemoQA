
const Page = require('./basePage');
const assert = require('assert');

class HomePage extends Page {

  get burgerMenu(){
    return $('//button[@id = "react-burger-menu-btn"]'); 
  }
  get allProduct(){
    return $('//div[@id="inventory_container" and @class="inventory_container"]');
  }
  get dropdownMenu(){
    return $('//nav[@class="bm-item-list"]');
  }

  get aboutCard(){
    return $('//a[@id="about_sidebar_link"]');
  }
  get allItemsCard(){
    return $('//a[@id="inventory_sidebar_link"]');
  } 
  get logoutCard(){
    return $('//a[@id="logout_sidebar_link"]');
  }
  get shoppingCart(){
    return $('//a[@class="shopping_cart_link"]'); 
  }
  checkIfUserIsLogedIn() {
    assert.equal(this.burgerMenu.isDisplayed(), true,"BurgerMenu button is displayed");
  }
  allProductIsDisplayed(){
    assert.equal(this.allProduct.isDisplayed(), true, "All product is displayed");
  }
  dropdownMenuIsDisplayed(){
    assert.equal(this.dropdownMenu.isDisplayed(), true, "Dropdown menu is displayed");
  }
  
  clickBurgerButton() {
    this.burgerMenu.click()
 }

 clickAboutCard() {
  this.aboutCard.click()

}
clickAllItemsCard(){
  this.allItemsCard.click()
}


 clickLogoutCard(){
  this.logoutCard.click()
 }
 
  clickShoppingCartButton(){
  this.shoppingCart.click()
 }

}  

module.exports = new HomePage();
