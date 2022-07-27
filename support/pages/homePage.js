

const Page = require('./basePage');


class HomePage extends Page {
   
  get burgerMenu(){
    return $('//button[@id = "react-burger-menu-btn"]'); 
 
 }
   
  clickBrugerButton() {
    this.burgerMenu.click()
 }

    
}

module.exports = new HomePage();
