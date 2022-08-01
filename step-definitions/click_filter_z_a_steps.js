const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');


When(/^The user click on option z-a$/, () => {
	HomePage.clickFilterZToA();
});

Then(/^The user should see all products listed z-a$/, () => {
	return true;
});




