const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const TwitterPage = require('../support/pages/twitterPage');


When(/^The user click on twitter button$/, () => {
	HomePage.clickTwitterButton();
});


Then(/^The user should see saucelabs twitter page$/, () => {
	TwitterPage.checkIfUserIsOnTwiiterPage();
});









