
const Page = require('./basePage');
const assert = require('assert');

class CheckoutOverview extends Page {
   
  get finishButton(){
    return $('//button[@id="finish"]');
  }
  get overviewPageIsDisplayed(){
    return $('//span[@class="title"]');
  }

  checkIfCheckoutOverviewIsDisplayed(){
    assert.equal(this.getText(this.overviewPageIsDisplayed), 'CHECKOUT: OVERVIEW', "Overview page is displayed");
   }

  clickFinishButton() {
        this.click(this.finishButton);

    }
}

module.exports = new CheckoutOverview();
