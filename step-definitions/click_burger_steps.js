const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

Then(/^The user should see dropdown button$/, () => {
	HomePage.dropdownMenuIsDisplayed();
});


