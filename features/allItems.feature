Feature: Saucedemo Login Page

  Scenario Outline: User is logging on www.saucedemo.com website
    Given The user is on login page
    When The user type valid username and password
     And The user click login button
    Then The user should see www.saucedemo.com home page

    Scenario Outline: Home page burger menu
    Given The user is on home page
    When The user click on burger menu
    Then The user should se dropdown menu
    When The user click on all items card
    Then The user should se all product displayed
   