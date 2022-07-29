const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

When(/^The user click logout button$/, () => {
	HomePage.clickLogoutCard()
});


Then(/^The user should be redirected to login page$/, () => {
	browser.url("/")
});



