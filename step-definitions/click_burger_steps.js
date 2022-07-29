const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');



When(/^The user click on burger button$/, () => {
	HomePage.clickBurgerButton();
});

Then(/^The user should see dropdown button$/, () => {
	HomePage.dropdownMenuIsDisplayed();

});


