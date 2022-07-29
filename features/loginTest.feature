Feature: Saucedemo Login Page

  Scenario: User is logging on www.saucedemo.com website
    Given The user is on login page
    When The user type valid username and password
    And The user click login button
    Then The user should see www.saucedemo.com home page
