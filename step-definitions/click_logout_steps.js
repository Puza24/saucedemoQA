const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');


When(/^The user click on burger button$/, () => {
	HomePage.clickBurgerButton();
});


When(/^The user click logout button$/, () => {
	HomePage.clickLogoutCard()
});


Then(/^The user should be redirected to login page$/, () => {
	browser.url("/")
});



