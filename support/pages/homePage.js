
const Page = require('./basePage');
const assert = require('assert');

class HomePage extends Page {

  get burgerMenu() {
    return $('//button[@id = "react-burger-menu-btn"]');
  }
  get allProduct() {
    return $('//div[@id="inventory_container" and @class="inventory_container"]');
  }
  get dropdownMenu() {
    return $('//nav[@class="bm-item-list"]');
  }
  get FilterButton() {
    return $('//select[@class="product_sort_container"]')
  }
  get lowToHigh() {
    return $('//option[@value="lohi"]')
  }
  get highToLow() {
    return $('//option[@value="hilo"]')
  }
  get aToZ() {
    return $('//option[@value="az"]');
  }
  get zToA() {
    return $('//option[@value="za"]')
  }

  get twitterButton() {
    return $('//a[@href="https://twitter.com/saucelabs"]');
  }
  get facebookButton(){
    return $('//a[@href="https://www.facebook.com/saucelabs"]');
  }
  get linkedInButton(){
    return $('//a[@href="https://www.linkedin.com/company/sauce-labs/"]');
  }

  get aboutCard() {
    return $('//a[@id="about_sidebar_link"]');
  }
  get allItemsCard() {
    return $('//a[@id="inventory_sidebar_link"]');
  }
  get logoutCard() {
    return $('//a[@id="logout_sidebar_link"]');
  }
  get shoppingCart() {
    return $('//a[@class="shopping_cart_link"]');
  }
  get productsText() {
    return $('//span[@class="title"]');
  }
  checkIfUserIsLogedIn() {
    assert.equal(this.burgerMenu.isDisplayed(), true, "BurgerMenu button is displayed");
  }
  checkIfUserIsLogedIn() {
    assert.equal(this.getText(this.productsText), 'PRODUCTS', "Products text is displayed");
  }
  allProductIsDisplayed() {
    assert.equal(this.allProduct.isDisplayed(), true, "All product is displayed");
  }
  dropdownMenuIsDisplayed() {
    assert.equal(this.dropdownMenu.isDisplayed(), true, "Dropdown menu is displayed");
  }
 
  clickFilterButtonLowHigh() {
    this.click(this.FilterButton);
  }
  clickLowToHigh() {
    this.click(this.lowToHigh);
  }
  clickHighToLow() {
    this.click(this.highToLow);
  }
  clickFilterAToZ() {
    this.click(this.aToZ);
  }
  clickFilterZToA(){
    this.click(this.zToA);
  }

  clickTwitterButton() {
    this.click(this.twitterButton);
  }
  clickFacebookButton(){
    this.click(this.facebookButton);
  }
  clickLiknedInButton(){
    this.click(this.linkedInButton);
  }

  clickBurgerButton() {
    this.click(this.burgerMenu);
  }

  clickAboutCard() {
    this.click(this.aboutCard);

  }
  clickAllItemsCard() {
    this.click(this.allItemsCard);
  }


  clickLogoutCard() {
    this.click(this.logoutCard);
  }

  clickShoppingCartButton() {
    this.click(this.shoppingCart);
  }

}

module.exports = new HomePage();
