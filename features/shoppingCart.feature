Feature: Saucedemo Login Page

  Scenario Outline: User is logging on www.saucedemo.com website
    Given The user is on login page
    When The user type valid username and password
     And The user click login button
    Then The user should see www.saucedemo.com home page

    Scenario Outline: Home page shopping cart
    Given The user is on home page
    When The user click shopping cart button
    Then The user should se checkout page
    Given The user is on checkout page
    When The user click checkout button
    Then The user should se checkout your info page
    Given The user is on checkout your info page
    When The user fill in necessary info
    And The user click continue
    Then The checkout overview page should display
    Given The user is on checkoutoverview page
    When The user click finish button
    Then The "thank you for your order" page should display
   