const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const userData = require("../config/data/userData");
const HomePage = require('../support/pages/homePage');

Given(/^The user is on login page$/, () => {
	browser.url("/");
});

When(/^The user type valid username and password$/, () => {
	LoginPage.inputUsernameAndPassword(userData.username, userData.password);
});

When(/^The user click login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^The user should see www.saucedemo.com home page$/, () => {
	HomePage.checkIfUserIsLogedIn();
});




