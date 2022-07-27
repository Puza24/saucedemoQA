const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const CheckoutPage = require('../support/pages/checkoutPage');
const CheckoutYourInfoPage = require('../support/pages/checkoutYourInfoPage');
const CheckoutOverview = require('../support/pages/checkoutOverview');

Given(/^The user is on login page$/, () => {
	browser.url("/");
});

When(/^The user type valid username and password$/, () => {
	LoginPage.inputUsernameAndPassword("standard_user", "secret_sauce");
});

When(/^The user click login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^The user should see www.saucedemo.com home page$/, () => {
		browser.pause(2000)
});



Given(/^The user is on home page$/, () => {
	browser.url("/inventory.html");
});

When(/^The user click shopping cart button$/, () => {
	HomePage.clickShoppingCartButton();
});

Then(/^The user should se checkout page$/, () => {
	browser.pause(2000)
});


Given(/^The user is on checkout page$/, () => {
	browser.url("/cart.html");
});


When(/^The user click checkout button$/, () => {
	CheckoutPage.clickCheckoutButton();
});

Then(/^The user should se checkout your info page$/, () => {
	browser.pause(2000)
});


Given(/^The user is on checkout your info page$/, () => {
	browser.url("/checkout-step-one.html");
});

When(/^The user fill in necessary info$/, () => {
	CheckoutYourInfoPage.inputUsernameLastnameAndZip('aleksa', 'puzic', 'no');
});


When(/^The user click continue$/, () => {
	CheckoutYourInfoPage.clickContinueButton();
});


Then(/^The checkout overview page should display$/, () => {
	browser.pause(2000)
});



Given(/^The user is on checkoutoverview page$/, () => {
	browser.url("/checkout-step-two.html");
});


When(/^The user click finish button$/, () => {
	CheckoutOverview.clickFinishButton();
});

Then(/^The "([^"]*)" page should display$/, (args1) => {
	browser.pause(2000)
	
});

