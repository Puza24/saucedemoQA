
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
   get FilterButton(){
    return $('//select[@class="product_sort_container"]')
   }
   get lowToHigh(){
     return $('//option[@value="lohi"]')
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
  get productsText(){
    return $('//span[@class="title"]');
  }
  checkIfUserIsLogedIn() {
    assert.equal(this.burgerMenu.isDisplayed(), true,"BurgerMenu button is displayed");
  }
  checkIfUserIsLogedIn(){
  assert.equal(this.getText(this.productsText), 'PRODUCTS',"Products text is displayed");
  }
  allProductIsDisplayed(){
    assert.equal(this.allProduct.isDisplayed(), true, "All product is displayed");
  }
  dropdownMenuIsDisplayed(){
    assert.equal(this.dropdownMenu.isDisplayed(), true, "Dropdown menu is displayed");
  }
  clickFilterButton(){
    this.FilterButton.click();
  }
  clickLowToHigh(){
    this.lowToHigh.click();
  }

  clickBurgerButton() {
    this.burgerMenu.click()
 }

 clickAboutCard() {
  this.click(this.aboutCard);

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
