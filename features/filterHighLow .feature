Feature: Saucedemo Filter Button

  Scenario: Navigating to filter button high-low
    Given The user is on home page
    When The user click on filter button
    And The user click on option high-low
    Then The user should see all products listed high-low
