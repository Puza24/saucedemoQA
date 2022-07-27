

const Page = require('./basePage');


class HomePage extends Page {
   
  get burgerMenu(){
    return $('//button[@id = "react-burger-menu-btn"]'); 
  }
    get aboutCard(){
      return $('//a[@id="about_sidebar_link"]');
    }
 
  clickBrugerButton() {
    this.burgerMenu.click()
 }
 
  clickAboutCard() {
    this.aboutCard.click()

 }

}  

module.exports = new HomePage();
