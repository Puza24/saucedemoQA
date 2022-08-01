const Page = require('./basePage');
const assert = require('assert');

class SauceLabsPage extends Page {

    get sauceLabs(){
        return $('//nav[@class="nav-container"]'); 
      }


      checkIfSauceLabsIsDisplayed(){
        assert.equal(this.sauceLabs.isDisplayed(), true, "Saucelabs is displayed");
      }



}
    module.exports = new SauceLabsPage();