Feature: BDD Sample

  Scenario: [000] Login to Swag Labs
    Given I have opened the site
    When I fill the user name field
    And I fill the password field
    And I click the Login button
    Then I should be able to log in to the site

    Scenario: [001] Add an item to cart by clicking "Add to cart" from the Inventory page
    Given I am on the "Inventory" page
    When I click the "Add to cart" button on any item in the "Inventory" page
    Then the cart button in the upper-right corner should add
