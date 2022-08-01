const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const CheckoutPage = require('../support/pages/checkoutPage');
const CheckoutYourInfoPage = require('../support/pages/checkoutYourInfoPage');
const CheckoutOverview = require('../support/pages/checkoutOverview');
const userData = require("../config/data/userData");
const CompletePage = require('../support/pages/checkoutCompletePage');

When(/^The user click shopping cart button$/, () => {
	HomePage.clickShoppingCartButton();
});

Then(/^The user should se checkout page$/, () => {
	CheckoutPage.checkIfCheckoutPageIsDisplayed();
});


Given(/^The user is on checkout page$/, () => {
	browser.url("/cart.html");
});


When(/^The user click checkout button$/, () => {
	CheckoutPage.clickCheckoutButton();
});

Then(/^The user should se checkout your info page$/, () => {
	CheckoutYourInfoPage.checkIfCheckoutYourInfoPageIsDisplayed();
});


Given(/^The user is on checkout your info page$/, () => {
	browser.url("/checkout-step-one.html");
});

When(/^The user fill in necessary info$/, () => {
	CheckoutYourInfoPage.inputFirstNameLastNameAndZip(userData.firstname, userData.lastname, userData.zip);
	CheckoutYourInfoPage.inputUsernameLastNameAndZip(userData.firstname, userData.lastname, userData.zip);
});

When(/^The user click continue$/, () => {
	CheckoutYourInfoPage.clickContinueButton();
});


Then(/^The checkout overview page should display$/, () => {
	CheckoutOverview.checkIfCheckoutOverviewIsDisplayed();
});


Given(/^The user is on checkoutoverview page$/, () => {
	browser.url("/checkout-step-two.html");
});


When(/^The user click finish button$/, () => {
	CheckoutOverview.clickFinishButton();
});

Then(/^The "([^"]*)" page should display$/, (args1) => {
	CompletePage.checkoutIfCompletePageIsDisplayed();

});

