
const Page = require('./basePage');
const assert = require('assert');

class LoginPage extends Page {

    get inputUsername() {
        return $('//input[@id="user-name"]');
    }

    get inputPassword() {
        return $('//input[@id="password"]');
    }

    get btnSubmit() {
        return $('//input[@id="login-button"]');
    }
    get loginPageIsDisplayed() {
        return $('//div[@class="login_logo"]');
    }
    checkloginPageIsDisplayed() {
        assert.equal(this.loginPageIsDisplayed.isDisplayed(), true, "Login button is displayed");
    }

    inputUsernameAndPassword(username, password) {
        this.setValue(this.inputUsername, username);
        this.setValue(this.inputPassword, password);

    }

    clickLoginButton() {
        this.click(this.btnSubmit);

    }
}

module.exports = new LoginPage();
