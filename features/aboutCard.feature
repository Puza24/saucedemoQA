Feature: Saucedemo About Button


  Scenario: Navigating to about button
    Given The user is on home page
    When The user click on burger button
    Then The user should see dropdown menu
    When The user click on about button
    Then The user should see www.saucelabs.com
