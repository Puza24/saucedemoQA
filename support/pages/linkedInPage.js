
const Page = require('./basePage');
const assert = require('assert');

class LinkedInPage extends Page {
   
  get linkedInLabs(){
    return $('//button[@class="join-form__form-body-submit-button"]');
  }

  checkIfLinkedInLoginPageIsDisplayed(){
    assert.equal(this.linkedInLabs.isDisplayed(), false, "LinkedIn login page is displayed");
  }
  
}

module.exports = new LinkedInPage();
