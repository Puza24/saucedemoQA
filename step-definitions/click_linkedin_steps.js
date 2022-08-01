const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const LinkedInPage = require('../support/pages/linkedInPage');


When(/^The user click on linkedin button$/, () => {
	HomePage.clickLiknedInButton();
});

Then(/^The user should see saucelabs linkedin login page$/, () => {
	LinkedInPage.checkIfLinkedInLoginPageIsDisplayed();
});













