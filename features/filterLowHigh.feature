Feature: Saucedemo Filter Button

  Scenario: Navigating to filter button low-high
    Given The user is on home page
    When The user click on filter button
    And The user click on option low-high
    Then The user should see all products listed low to high
