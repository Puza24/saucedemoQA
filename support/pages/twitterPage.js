
const Page = require('./basePage');
const assert = require('assert');

class TwitterPage extends Page {
   
  get twitterSauceLabs(){
    return $('//main[@role="main"]');
  }


  checkIfUserIsOnTwiiterPage() {
        assert.equal(this.twitterSauceLabs.isDisplayed(), false, "Twitter page is displayed");

    }
}

module.exports = new TwitterPage();
