const Page = require('./basePage');
const assert = require('assert');


class CompletePage extends Page {

    get completePageIsDisplayed() {
        return $('//h2[@class="complete-header"]');
    }

    checkoutIfCompletePageIsDisplayed() {
        assert.equal(this.getText(this.completePageIsDisplayed), 'THANK YOU FOR YOUR ORDER', "Complete page is displayed");
    }

}

module.exports = new CompletePage();