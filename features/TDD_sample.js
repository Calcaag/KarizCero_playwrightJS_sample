Feature("Sample Test Cases for TDD");

Scenario("Open Site", ({ I }) => {
  I.amOnPage(`https://www.saucedemo.com/`);
});

Scenario("Login", ({ I }) => {
  I.fillField(`#user-name`);
  pause();
});
