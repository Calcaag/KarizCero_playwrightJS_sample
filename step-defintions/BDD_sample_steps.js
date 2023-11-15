const { I, pageObjects_sample, dataConfig_sample } = inject();

// [000] Login to Swag Labs

Given("I have opened the site", () => {
  I.amOnPage(`https://www.saucedemo.com/`);
});

When("I fill the user name field", () => {
  I.fillField(`#user-name`, `standard_user`);
});

When("I fill the password field", () => {
  I.fillField(`#password`, `secret_sauce`);
});

When("I click the Login button", () => {
  I.click(`#login-button`);
});

Then("I should be able to log in to the site", () => {
  I.seeInCurrentUrl(`https://www.saucedemo.com/inventory.html`);
});

//------------------------------------------------------------
// [001] Add an item to cart by clicking "Add to cart" from the Inventory page

Given("I am on the {string} page", (pageName) => {
  // Verify necessary page elements:
  I.seeInCurrentUrl(`https://www.saucedemo.com/inventory.html`);
  I.waitForVisible(
    `//button[@class='btn btn_primary btn_small btn_inventory '][1]`
  );
});

When(
  "I click the {string} button on any item in the {string} page",
  async (buttonName, pageName) => {
    await pageObjects_sample.addToCart_anyItem_InventoryPage();
  }
);

Then("the cart button in the upper-right corner should add", () => {
  I.waitForText(`1`, 5, `//span[@class='shopping_cart_badge']`);
});
