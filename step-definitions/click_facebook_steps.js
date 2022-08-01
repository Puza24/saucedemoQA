const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const FacebookPage = require('../support/pages/facebookPage');

When(/^The user click on facebook button$/, () => {
	HomePage.clickFacebookButton();
});

Then(/^The user should see saucelabs facebook page$/, () => {
	FacebookPage.checkIfFacebookPageIsDisplayed();
});









