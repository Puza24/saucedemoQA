Feature: Saucedemo Filter Button

  Scenario: Navigating to filter button z-a
    Given The user is on home page
    When The user click on filter button
    And The user click on option z-a
    Then The user should see all products listed z-a
