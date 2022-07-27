const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

Given(/^The user is on login page$/, () => {
	browser.url("/");
});

When(/^The user type valid username and password$/, () => {
	LoginPage.inputUsernameAndPassword("standard_user", "secret_sauce");
});

When(/^The user click login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^The user should see www.saucedemo.com home page$/, () => {
		browser.pause(2000)
});

Given(/^The user is on home page$/, () => {
	browser.url("/inventory.html");
});

When(/^The user click on burger menu$/, () => {
	HomePage.clickBrugerButton();
});

Then(/^The user should se dropdown menu$/, () => {
	browser.pause(2000)
});

When(/^The user click on all items card$/, () => {
	HomePage.clickAllItemsCard();
});

Then(/^The user should se all product displayed$/, () => {
	browser.pause(2000)
});




