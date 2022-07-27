

const Page = require('./basePage');


class HomePage extends Page {
   
  get burgerMenu(){
    return $('//button[@id = "react-burger-menu-btn"]'); 
  }
  
    get logoutCard(){
      return $('//a[@id="logout_sidebar_link"]');
    }
 
  clickBrugerButton() {
    this.burgerMenu.click()
 }
 
 
 clickLogoutCard(){
  this.logoutCard.click()
 }

}  

module.exports = new HomePage();
