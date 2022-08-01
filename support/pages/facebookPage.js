
const Page = require('./basePage');
const assert = require('assert');

class FacebookPage extends Page {
   
  get facebookSauceLabs(){
    return $('//span[@class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql b0tq1wua a5q79mjw g1cxx5fr b1v8xokw m9osqain"]');
  }


  checkIfFacebookPageIsDisplayed() {
        assert.equal(this.facebookSauceLabs.isDisplayed(), false, "Twitter page is displayed");

    }
}

module.exports = new FacebookPage();
