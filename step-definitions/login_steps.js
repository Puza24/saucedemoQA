const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require ("../support/pages/loginPage")


Given(/^The user is on login page$/, () => {
	browser.url("/");
});

When(/^The user type valid username and password$/, () => {
	LoginPage.inputUsernameAndPassword("standard_user", "secret_saucePera");
});

When(/^The user click login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^The user should see www.saucedemo.com home page$/, () => {
	browser.pause(10000)
});

