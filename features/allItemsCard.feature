Feature: Saucedemo All Item Button

    Scenario: Navigatin to all items button
        Given The user is on home page
        When The user click on burger menu
        Then The user should see dropdown menu
        When The user click on all items button
        Then The user should se all product displayed
