const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');



When(/^The user click on filter button$/, () => {
	HomePage.clickFilterButton();
});

When(/^The user click on option low-high$/, () => {
	HomePage.clickLowToHigh();
});


Then(/^The user should see all products listed low to high$/, () => {
	return true;
});




