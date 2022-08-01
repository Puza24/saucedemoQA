const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

When(/^The user click on option high-low$/, () => {
	HomePage.clickHighToLow();
});

Then(/^The user should see all products listed high-low$/, () => {
	return true;
});




