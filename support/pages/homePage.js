

const Page = require('./basePage');


class HomePage extends Page {
   
  get burgerMenu(){
    return $('//button[@id = "react-burger-menu-btn"]'); 
  }
    get allItemsCard(){
      return $('//a[@id="inventory_sidebar_link"]');
    }
 
  clickBrugerButton() {
    this.burgerMenu.click()
 }
 
 clickAllItemsCard() {
  this.allItemsCard.click()
 }

}  

module.exports = new HomePage();
