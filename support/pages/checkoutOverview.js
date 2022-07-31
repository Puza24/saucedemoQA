

const Page = require('./basePage');


class CheckoutOverview extends Page {
   
  get finishButton(){
    return $('//button[@id="finish"]');
  }



  clickFinishButton() {
        this.click(this.finishButton);

    }
}

module.exports = new CheckoutOverview();
