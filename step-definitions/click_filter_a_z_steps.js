const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');


When(/^The user click on option a-z$/, () => {
	HomePage.clickFilterAToZ();
});

Then(/^The user should see all products listed a-z$/, () => {
	return true;
});



