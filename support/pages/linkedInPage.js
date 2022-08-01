
const Page = require('./basePage');
const assert = require('assert');

class LinkedInPage extends Page {
   
  get linkedInLabs(){
    return $('//button[@class="join-form__form-body-submit-button"]');
  }

  checkIfLinkedInLoginPageIsDisplayed(){
    assert.equal(this.linkedInLabs.isDisplayed(), false, "LinkedIn login page is displayed");
    assert.equal(this.linkedInLabs.isClickable(), false, "Button is clickable");
  }
  
}

module.exports = new LinkedInPage();
