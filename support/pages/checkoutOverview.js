

const Page = require('./basePage');


class CheckoutOverview extends Page {
   
  get finishButton(){
    return $('//button[@id="finish"]');
  }



  clickFinishButton() {
        this.finishButton.click()

    }
}

module.exports = new CheckoutOverview();
