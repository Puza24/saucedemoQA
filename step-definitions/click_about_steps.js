const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');



Given(/^The user is on home page$/, () => {
	browser.url("/");
	LoginPage.inputUsernameAndPassword(userData.username, userData.password);
	LoginPage.clickLoginButton();
	HomePage.checkIfUserIsLogedIn();
});


When(/^The user click on burger button$/, () => {
	HomePage.clickBurgerButton();
});

Then(/^The user should see dropdown menu$/, () => {
	return true;
});


When(/^The user click on about button$/, () => {
	HomePage.clickAboutCard();
});

Then(/^The user should see www.saucelabs.com$/, () => {
	browser.url('https://saucelabs.com/')
});







