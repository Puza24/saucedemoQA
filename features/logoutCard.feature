Feature: Saucedemo Logout Page

  Scenario: Navigatin to logout button
    Given The user is on home page
    When The user click on burger button
    Then The user should see dropdown menu
    When The user click logout button
    Then The user should be redirected to login page
