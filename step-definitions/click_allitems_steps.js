const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');


When(/^The user click on burger menu$/, () => {
	HomePage.clickBurgerButton();
});


When(/^The user click on all items button$/, () => {
	HomePage.clickAllItemsCard();
});


Then(/^The user should se all product displayed$/, () => {
	HomePage.allProductIsDisplayed();
});

