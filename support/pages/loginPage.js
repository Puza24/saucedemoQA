

const Page = require('./basePage');


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

  
    inputUsernameAndPassword(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);

    }

    clickLoginButton() {
        this.btnSubmit.click()

    }
}

module.exports = new LoginPage();
