Feature: Saucedemo Filter Button

  Scenario: Navigating to filter button a-z
    Given The user is on home page
    When The user click on filter button
    And The user click on option a-z
    Then The user should see all products listed a-z
