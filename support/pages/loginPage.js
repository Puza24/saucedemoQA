

const Page = require('./basePage');


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('//input[@id="user-name"]');
    }

    get inputPassword() {
        return $('//input[@id="password"]');
    }

    get btnSubmit() {
        return $('//input[@id="login-button"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    inputUsernameAndPassword(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);

    }

    clickLoginButton() {
        this.btnSubmit.click()

    }
}

module.exports = new LoginPage();
